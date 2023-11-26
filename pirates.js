function solve(arr) {
  let targets = {};
  let command = arr.shift();

  while (command != `Sail`) {
    let [city, population, gold] = command.split(`||`);
    population = Number(population);
    gold = Number(gold);

    if (city in targets) {
      targets[city].population += population;
      targets[city].gold += gold;
    } else {
      targets[city] = { population, gold };
    }

    command = arr.shift();
  }

  command = arr.shift();

  while (command != `End`) {
    let text = command.split(`=>`);
    let action = text.shift();
    let actionCity = text.shift();

    if (action == `Prosper`) {
      let goldAmountAdded = Number(text.shift());

      if (goldAmountAdded > 0) {
        targets[actionCity].gold += goldAmountAdded;
        console.log(`${goldAmountAdded} gold added to the city treasury. ${actionCity} now has ${targets[actionCity].gold} gold.`);
      } else {
        console.log(`Gold added cannot be a negative number!`);
      }

    } else if (action == `Plunder`) {
      let pplKilled = Number(text.shift());
      let goldStolen = Number(text.shift());

      console.log(`${actionCity} plundered! ${goldStolen} gold stolen, ${pplKilled} citizens killed.`);

      targets[actionCity].population -= pplKilled;
      targets[actionCity].gold -= goldStolen;

      if (targets[actionCity].gold <= 0 || targets[actionCity].population <= 0) {
        delete targets[actionCity];
        console.log(`${actionCity} has been wiped off the map!`);
      }

    }

    command = arr.shift();
  }

  let count = 0;

  for (town in targets) {
    count++;
  }

  if (count > 0) {
    console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
  } else {
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
  }

  for (town in targets) {
    console.log(`${town} -> Population: ${targets[town].population} citizens, Gold: ${targets[town].gold} kg`);
  }

}

// solve([
//   "Tortuga||345000||1250",
//   "Santo Domingo||240000||630",
//   "Havana||410000||1100",
//   "Sail",
//   "Plunder=>Tortuga=>75000=>380",
//   "Prosper=>Santo Domingo=>180",
//   "End"
// ]);

solve([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End"]);