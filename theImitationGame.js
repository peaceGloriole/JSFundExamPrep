function solve(arr) {
  let message = arr.shift();

  let text = arr.shift().split(`|`);

  while (text != `Decode`) {
    let command = text.shift();

    switch (command) {
      case `ChangeAll`:
        let match = text.shift();
        let replace = text;

        message = message.split(match).join(replace);
        break;
      case `Insert`:
        let index = Number(text.shift());
        let letter = text;
        let left = message.slice(0, index);
        let right = message.slice(index);

        message = left + letter + right;
        break;
      case `Move`:
       let idx = Number(text);

       let leftMessage = message.slice(0, idx);
       let rightMessage = message.slice(idx);

       message = rightMessage + leftMessage;
        break;
    }

    text = arr.shift().split(`|`);
  }

  console.log(`The decrypted message is: ${message}`);
}

solve([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode'
]);