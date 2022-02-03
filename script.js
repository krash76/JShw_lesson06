// game "guess number from 1 to 100" / игра "угадай число от 1 до 100"
"use strict";

let randomNumber, userNumber;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

function isNumber(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

function getNumber(num) {
  return num = Number(num.trim());
}

function guessNumber() {
  userNumber = prompt("guess number from 1 to 100 / угадай число от 1 до 100" );
  if (userNumber === null) {
    alert("Game over / Игра окончена");
    return;
  } else if (isNumber(userNumber)) {
    userNumber = getNumber(userNumber);
    if (userNumber > randomNumber) {
      alert(" the number should be less / загаданное число меньше");
    } else if (userNumber < randomNumber) {
      alert(" the number should be greater / загаданное число больше");
    } else if (userNumber === randomNumber) {
      alert("Congratulations, you guessed!!! / Поздравляю, Вы угадали!!!");
      return userNumber;
    }
  } else {
    alert("Enter any number from 1 to 100! / Введи число от 1 до 100!");
  }
  return guessNumber();
}

randomNumber = getRandomIntInclusive(1,100);

console.log(guessNumber());