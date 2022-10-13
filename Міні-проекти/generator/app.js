'use strict'
function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function checkInterval(min, max, quantity) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr.length >= quantity;
}

document.querySelector('button').onclick = () => {
  let min = +document.querySelector('#min').value;
  let max = +document.querySelector('#max').value;
  let quantity = +document.querySelector('#amount').value;
  let isUnique = document.querySelector('#unique').checked;
  let result = document.querySelector('.result');
  let resultWrapper = document.body.querySelector('.result-wrapper');
  resultWrapper.style.display = 'none';
  result.textContent = '';
  if (min > max) {
    alert('You\'ve entered wrong interval');
    return false;
  }
  if (isUnique && !checkInterval(min, max, quantity)) {
    alert('The amount of numbers is too big for such interval');
    return false;
  }
  let arr = [];
  for (let i = 0; i < quantity; i++) {
    let randomNumber = random(min, max);
    if (isUnique && arr.includes(randomNumber)) {
      i--;
      continue;
    }
    arr.push(randomNumber);
  }

  if (arr.length > 0) resultWrapper.style.display = 'block';

  arr.forEach((elem, index) => {
    if (index === arr.length - 1) {
      result.append(elem);
    } else {
      result.append(elem + ', ');
    }
  });



  return false;
}