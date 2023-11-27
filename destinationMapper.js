function solve(input) {
  let text = input;
  let pattern = /([=\/])([A-Z][a-zA-Z]{2,})\1/g;

  let matches = [];
  let match = pattern.exec(text);

  while (match !== null) {
    matches.push(match[2]);
    match = pattern.exec(text);
  }

  if (matches.length > 0) {
    let travelPoints = matches.reduce((total, destination) => total + destination.length, 0);

    console.log(`Destinations: ${matches.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
  } else {
    console.log("Destinations:");
    console.log("Travel Points: 0");
  }
}

solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
solve("ThisIs some InvalidInput");
