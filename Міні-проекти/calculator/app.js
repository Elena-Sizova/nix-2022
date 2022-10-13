'use strict'

let result = ''; //first number
let number = ''; //second number
let sign = '';
let finish = false;
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', 'x', '/', '%', '+/-'];


//screen
const onScreen = document.querySelector('.screen p');

function clean() {
  result = '';
  number = '';
  sign = '';
  finish = false;
  onScreen.textContent = '0';
}

function calculate(a, b, sign) {
  if (b === '') b = a;
  switch (sign) {
    case '+':
      a = +(+a + (+b)).toFixed(7);
      break;
    case '-':
      a = +(a - b).toFixed(7);
      break;
    case 'x':
      a = +(a * b).toFixed(7);
      break;
    case '/':
      if (b === '0') {
        a = '';
        b = '';
        sign = '';
        return 'It\'s mistake';
      }
      a = +(a / b).toFixed(7);
      break;
    case '%':
      a = +(a * b / 100).toFixed(7);
      break;
    case '-/+':
      a = +(a * b / 100).toFixed(7);
      break;
  }
  return a;
}

document.querySelector('.clean').onclick = clean;
document.querySelector('.buttons').onclick = (event) => {
  if (event.target.classList.contains('clean') || !event.target.classList.contains('btn')) return;

  onScreen.textContent = '';
  let key = event.target.textContent;
  //if button 0-9, . is pressed 
  if (digit.includes(key)) {
    if (number === '' && sign === '') {
      if (key === '.' && result.includes('.') ||
        result.length === 9 ||
        key === '0' && result === '0') {
        onScreen.textContent = result;
        return;
      };
      if (key === "." && result === '') {
        result += 0 + key;
      } else {
        result += key;
      }

      onScreen.textContent = result;
    } else if (result !== '' && number !== '' && finish) {
      if (key === '.' && number.includes('.') ||
        number.length === 9 ||
        key === '0' && number === '0') {
        onScreen.textContent = number;
        return;
      };
      if (key === "." && number === '') {
        number += 0 + key;
      } else {
        number += key;
      }
      finish = false;
      onScreen.textContent = number;
    } else {
      if (key === '.' && number.includes('.') ||
        number.length === 9 ||
        key === '0' && number === '0') {
        onScreen.textContent = number;
        return;
      };
      if (key === "." && number === '') {
        number += 0 + key;
      } else {
        number += key;
      }

      onScreen.textContent = number;
    }
    return;
  }

  //if sign /*-+ is pressed 
  if (action.includes(key)) {
    if (key === '+/-') {
      if (sign === '') {
        result = -result;
        onScreen.textContent = result;
      } else {
        number = -number;
        onScreen.textContent = number;
      }
    } else {
      if (sign !== '') {
        result = calculate(result, number, sign);
        number = '';
      }
      sign = key;
      onScreen.textContent = sign;
    }
    return;
  }

  //if = is pressed
  if (key === '=') {
    result = calculate(result, number, sign);
    onScreen.textContent = result;
    sign = '';
    number = '';
    finish = true;
  }
}