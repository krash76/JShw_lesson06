// game "guess number from 1 to 100" / игра "угадай число от 1 до 100"
"use strict";

let randomNumber, userNumber;
let attempts = 10 ;
let response;

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

function toReplay() {
  attempts = 10;
  return guessNumber();
}

function toStop () {
  alert(`Game over / Игра окончена`);
  return;
}

function guessNumber() {
  userNumber = prompt(`guess number from 1 to 100 / угадай число от 1 до 100` );
  attempts = attempts - 1;
  if (attempts === 0) {
    response = confirm (`Your attempts are finished, do you want to play else? / Попытки закончились, хотите сыграть еще?`);
    (response === true) ? toReplay() : toStop();
    return userNumber;
  } else if (userNumber === null) {
    alert(`Game over / Игра окончена`);
    return;
  } else if (isNumber(userNumber)) {
    userNumber = getNumber(userNumber);
    if (userNumber > randomNumber) {
      alert(` the number should be less, you have ${attempts} attempts else / загаданное число меньше, у вас еще   ${attempts} попыток` );
    } else if (userNumber < randomNumber) {
      alert( `the number should be greater, you have ${attempts} attempts else / загаданное число больше, у вас еще   ${attempts} попыток`);
    } else if (userNumber === randomNumber) {
      response = confirm (`Congratulations, you guessed!!! do you want to play else? // Поздравляю, Вы угадали!!! Хотите сыграть еще?`);
      (response === true) ? toReplay() : toStop();
      return userNumber;
    }
  } else {
    alert(`Enter any number from 1 to 100! / Введи число от 1 до 100!`);
  } 
  return guessNumber();
}

randomNumber = getRandomIntInclusive(1,100);

console.log(guessNumber());