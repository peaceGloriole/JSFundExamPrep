function adAstra(arr) {
  let str = arr.shift();
  let pattern = /([#|])(?<item>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
  let items = [];
  let totalCal = 0;
  
  let matches = str.matchAll(pattern);
  
  for (let match of matches) {
    let { item, expDate, calories } = match.groups;
    totalCal += Number(calories);
    
    items.push({ item: item, expdate: expDate, calories: calories });
  }
  
  let days = Math.floor(totalCal / 2000);
  console.log(`You have food to last you for: ${days} days!`);

  items.forEach(items => console.log(`Item: ${items.item}, Best before: ${items.expdate}, Nutrition: ${items.calories}`));
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);