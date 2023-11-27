function solve(arr) {
  let num = Number(arr.shift());
  let plants = {};

  //getting all the plants and rarity and adding to the Object
  for (let i = 0; i < num; i++) {
    let [plant, rarity] = arr.shift().split(`<->`);
    rarity = Number(rarity);
    plants[plant] = { plant, rarity, rate: [], totalRating: 0, averageRating: 0 };
  }

  let command = arr.shift();
  //going into while loop till Exhibition ends it and parsing the input
  while (command != `Exhibition`) {
    let [action, args] = command.split(`: `);

    switch (action) {
      case `Rate`:
        let [ratedPlant, rating] = args.split(` - `);
        rating = Number(rating);

        if (plants.hasOwnProperty(ratedPlant)) {
          plants[ratedPlant].rate.push(rating);
          plants[ratedPlant].totalRating += rating;
          plants[ratedPlant].averageRating = plants[ratedPlant].totalRating / plants[ratedPlant].rate.length;
        } else {
          console.log("error");
        }
        break;
      case `Update`:
        let [updatePlant, newRarity] = args.split(` - `);
        newRarity = Number(newRarity);

        if (plants.hasOwnProperty(updatePlant)) {
          plants[updatePlant].rarity = newRarity;
        } else {
          console.log("error");
        }
        break;
      case `Reset`:
        let resetPlant = args;

        if (plants.hasOwnProperty(resetPlant)) {
          delete plants[resetPlant].rate;
          delete plants[resetPlant].averageRating;
        } else {
          console.log("error");
        }
        break;
      default:
        console.log("error");
        break;
    }

    command = arr.shift();
  }

  // for loop to get all the plants 
  console.log(`Plants for the exhibition:`);
  for (let names in plants) {
    console.log(`- ${plants[names].plant}; Rarity: ${plants[names].rarity}; Rating: ${plants[names].averageRating ? plants[names].averageRating.toFixed(2) : '0.00'}`);

  }
}

solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition"
]);
