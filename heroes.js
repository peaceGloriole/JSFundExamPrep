function solve(input) {
  let numParty = Number(input.shift());

  let heroes = {};

  for (let i = 0; i < numParty; i++) {
    let [name, hp, mp] = input.shift().split(' ');
    heroes[name] = { name, hp: Number(hp), mp: Number(mp) };
  }

  let maxHP = 100;
  let maxMP = 200;

  let match = input.shift().split(` - `);

  while (match != `End`) {
    let command = match.shift();
    let givenHero = match.shift();
    let digit = Number(match.shift());

    switch (command) {
      case `Heal`:
        let oldHP = heroes[givenHero].hp;
        heroes[givenHero].hp += digit;

        if (heroes[givenHero].hp > maxHP) {
          heroes[givenHero].hp = maxHP;

          let healingAmount = maxHP - oldHP;
          console.log(`${givenHero} healed for ${healingAmount} HP!`);
        } else {
          console.log(`${givenHero} healed for ${digit} HP!`);
        }

        break;
      case `Recharge`:
        let oldMP = heroes[givenHero].mp;
        heroes[givenHero].mp += digit;

        if (heroes[givenHero].mp > maxMP) {
          heroes[givenHero].mp = maxMP;

          let manaAmount = maxMP - oldMP;
          console.log(`${givenHero} recharged for ${manaAmount} MP!`);
        } else {
          console.log(`${givenHero} recharged for ${digit} MP!`);
        }

        break;
      case `TakeDamage`:
        let enemy = match.shift();
        heroes[givenHero].hp -= digit;

        if (heroes[givenHero].hp > 0) {
          console.log(`${givenHero} was hit for ${digit} HP by ${enemy} and now has ${heroes[givenHero].hp} HP left!`);
        } else {
          delete heroes[givenHero];
          console.log(`${givenHero} has been killed by ${enemy}!`);
        }

        break;
      case `CastSpell`:
        let spellName = match.shift();

        if (heroes[givenHero].mp >= digit) {
          heroes[givenHero].mp -= digit;
          console.log(`${givenHero} has successfully cast ${spellName} and now has ${heroes[givenHero].mp} MP!`);
        } else {
          console.log(`${givenHero} does not have enough MP to cast ${spellName}!`);
        }

        break;
    }
    match = input.shift().split(` - `);
  }

  for (let heroName in heroes) {
    console.log(`${heroName}\n  HP: ${heroes[heroName].hp}\n  MP: ${heroes[heroName].mp}`);
  }

}

// solve([
//   '2',
//   'Solmyr 85 120',
//   'Kyrre 99 50',
//   'Heal - Solmyr - 10',
//   'Recharge - Solmyr - 50',
//   'TakeDamage - Kyrre - 66 - Orc',
//   'CastSpell - Kyrre - 15 - ViewEarth',
//   'End'
// ]);

solve([
  `4`,
  `Adela 90 150`,
  `SirMullich 70 40`,
  `Ivor 1 111`,
  `Tyris 94 61`,
  `Heal - SirMullich - 50`,
  `Recharge - Adela - 100`,
  `CastSpell - Tyris - 1000 - Fireball`,
  `TakeDamage - Tyris - 99 - Fireball`,
  `TakeDamage - Ivor - 3 - Mosquito`,
  `End`
]);