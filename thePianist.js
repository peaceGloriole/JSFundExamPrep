function solve(arr) {
  let numPieces = Number(arr.shift());
  let piecesList = {};

  for (let i = 0; i < numPieces; i++) {
    let [piece, composer, key] = arr.shift().split(`|`);
    piecesList[piece] = { piece, composer: composer, key: key };
  }

  let actions = arr.shift().split(`|`);

  while (actions != `Stop`) {
    let command = actions.shift();
    let newPiece = actions.shift();

    if (command == `Add`) {
      let composer = actions.shift();
      let key = actions.shift();

      if (newPiece in piecesList) {
        console.log(`${newPiece} is already in the collection!`);
      } else {
        piecesList[newPiece] = { piece: newPiece, composer, key };
        console.log(`${newPiece} by ${composer} in ${key} added to the collection!`);
      }

    } else if (command == `Remove`) {

      if (newPiece in piecesList) {
        delete piecesList[newPiece];
        console.log(`Successfully removed ${newPiece}!`);
      } else {
        console.log(`Invalid operation! ${newPiece} does not exist in the collection.`);
      }

    } else if (command == `ChangeKey`) {
      let newKey = actions.shift();

      if (newPiece in piecesList) {
        piecesList[newPiece].key = newKey;
        console.log(`Changed the key of ${newPiece} to ${newKey}!`);
      } else {
        console.log(`Invalid operation! ${newPiece} does not exist in the collection.`);
      }

    }

    actions = arr.shift().split(`|`);
  }

  Object.values(piecesList).forEach(piece => {
    console.log(`${piece.piece} -> Composer: ${piece.composer}, Key: ${piece.key}`);
  });
}

solve([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'
]);