"use strict";

const randomDamage = () => Math.floor(Math.random() * 10) + 1;

const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};

const attackPlayer = (health) => health - randomDamage();

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};
const isDead = (health) => health <= 0;

// Main fight function

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);

    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Jade", "Subzero", 100, 100);

function calculatePay(wage, hours) {
  return wage * hours;
}

console.log(calculatePay(18, 40));

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(82));
console.log(getGrade(53));
function prioritize(urgent, important) {
  if (urgent && important) {
    return 1;
  } else if (important && !urgent) {
    return 2;
  } else if (urgent && !important) {
    return 3;
  } else {
    return 4;
  }
}

console.log(prioritize(true, true));
console.log(prioritize(false, true));
console.log(prioritize(true, false));
console.log(prioritize(false, false));
