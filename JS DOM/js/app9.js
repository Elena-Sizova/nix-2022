'use strict'
let menu = document.querySelector('.menu');
let spanElem = menu.querySelector('span');

spanElem.onclick = function () {
  menu.classList.toggle('expand');
};