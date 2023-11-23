function solve(input) {
  let message = input.shift();

  let text = input.shift();

  while (text != `Reveal`) {
    let token = text.split(`:|:`);
    let command = token[0];

    if (command == `ChangeAll`) {
      let find = token[1];
      let replace = token[2];

      let parts = message.split(find);
      message = parts.join(replace);
      console.log(message);
    } else if (command == `Reverse`) {
      let tokenToReverse = token[1];

      let index = message.indexOf(tokenToReverse);

      if (index !== -1) {
        let reversedToken = tokenToReverse.split('').reverse().join('');
        message = message.slice(0, index) + reversedToken + message.slice(index + tokenToReverse.length);
        console.log(message);
      } else {
        console.log(`error`);
      }

    } else if (command == `InsertSpace`) {
      let givenIndex = Number(token[1]);

      let leftMatch = message.slice(0, givenIndex);
      let rightMatch = message.slice(givenIndex);

      message = leftMatch + ` ` + rightMatch;
      console.log(message);
    }

    text = input.shift();
  }

  console.log(`You have a new text message: ${message}`);
}

solve([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal'
]);
