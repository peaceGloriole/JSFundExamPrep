function solve(input) {
  let numParty = Number(input.shift());

  let heroes = {};

  for (let i = 0; i < numParty; i++) {
    let [name, hp, mp] = input.shift().split(' ');
    heroes[name] = { name, hp: Math.min(100, Number(hp)), mp: Math.min(200, Number(mp)) };
  }

  let match = input.shift();

  while (match != 'End') {
    let token = match.split(' - ');
    let command = token[0];
    let heroName = token[1];

    switch (command) {
      case 'TakeDamage':
        let damageAmount = Number(token[2]);
        let attacker = token[3];
        heroes[heroName].hp -= damageAmount;
        if (heroes[heroName].hp <= 0) {
          console.log(`${heroName} has been killed by ${attacker}!`);
          delete heroes[heroName];
        } else {
          console.log(`${heroName} was hit for ${damageAmount} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
        }
        break;
      case 'CastSpell':
        let spellMP = Number(token[2]);
        let spellName = token[3];
        if (heroes[heroName].mp >= spellMP) {
          heroes[heroName].mp -= spellMP;
          console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
        } else {
          console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }
        break;
      case 'Recharge':
        let rechargeAmount = Number(token[2]);
        heroes[heroName].mp = Math.min(200, heroes[heroName].mp + rechargeAmount);
        console.log(`${heroName} recharged for ${rechargeAmount} MP!`);
        break;
      case 'Heal':
        let healAmount = Number(token[2]);
        heroes[heroName].hp = Math.min(100, heroes[heroName].hp + healAmount);
        console.log(`${heroName} healed for ${healAmount} HP!`);
        break;
    }

    match = input.shift();
  }

  for (let heroName in heroes) {
    console.log(`${heroName}\n  HP: ${heroes[heroName].hp}\n  MP: ${heroes[heroName].mp}`);
  }
}

solve([
  '2',
  'Solmyr 85 120',
  'Kyrre 99 50',
  'Heal - Solmyr - 10',
  'Recharge - Solmyr - 50',
  'TakeDamage - Kyrre - 66 - Orc',
  'CastSpell - Kyrre - 15 - ViewEarth',
  'End'
]);

// solve([
//     `4`,
//     `Adela 90 150`,
//     `SirMullich 70 40`,
//     `Ivor 1 111`,
//     `Tyris 94 61`,
//     `Heal - SirMullich - 50`,
//     `Recharge - Adela - 100`,
//     `CastSpell - Tyris - 1000 -
// Fireball`,
//     `TakeDamage - Tyris - 99 - Fireball`,
//     `TakeDamage - Ivor - 3 - Mosquito`,
//     `End`
// ]);