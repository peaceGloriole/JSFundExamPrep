function worldTour(arr) {
  let stop = arr.shift();

  let actions = arr.shift().split(`:`);
  let command = actions[0];

  while (command != `Travel`) {

    if (command == `Add Stop`) {
      let index = Number(actions[1]);
      let newDestination = actions[2];

      if (index >= 0 && index < stop.length) {
        let left = stop.slice(0, index);
        let right = stop.slice(index);
        stop = left + newDestination + right;
      }

      console.log(stop);
    } else if (command == `Remove Stop`) {
      let startIndex = Number(actions[1]);
      let endIndex = Number(actions[2]);
      let remove = stop.slice(startIndex, endIndex + 1);

      if (startIndex >= 0 && startIndex < stop.length && endIndex >= 0 && endIndex < stop.length &&
        startIndex <= endIndex && stop.includes(remove)) {
        stop = stop.replace(remove, ``);
      }

      console.log(stop);
    } else if (command == `Switch`) {
      let oldStr = actions[1];
      let newStr = actions[2];

      if (stop.includes(oldStr)) {
        stop = stop.replace(oldStr, newStr);
      }

      console.log(stop);
    }

    actions = arr.shift().split(`:`);
    command = actions[0];
  }

  console.log(`Ready for world tour! Planned stops: ${stop}`);
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel"
]);