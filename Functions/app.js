'use strict'

//Task 1
// function isEmpty(obj) {
//   let empty = true;
//   for (let key in obj) {
//     empty = false;
//   }
//   return empty;
// }


//Task 2
// let multiplyNumeric = function (obj) {
//   for (let key in obj) {
//     debugger;
//     if (typeof obj[key] === "number") obj[key] *= 2;
//   }
// };

//Task 3
// let readNumber = function () {
//   let needLoop = true;
//   while (needLoop) {
//     let number = prompt('Enter a number');
//     if (number === '' || number === null) return null;
//     number = +number;
//     if (!isNaN(number)) {
//       return number;
//     }
//   }
// };
// let number = readNumber();
// console.log(number);

//Task 4
// let random = (min, max) => Math.random() * (max - min) + min;
// console.log(random(1, 5));
// console.log(random(1, 5));
// console.log(random(1, 5));

//Task 5
// let random = (min, max) => Math.round(Math.random() * (max - min) + min);

// console.log(random(1, 5));
// console.log(random(1, 5));
// console.log(random(1, 5));

//Task 6

// let usFirst = function (str) {
//   return str.slice(0, 1).toUpperCase() + str.slice(1);
// };

// console.log(usFirst("red"));
// console.log(usFirst("consequence"));
// console.log(usFirst(""));

//Task 7
// let checkSpam = function (str) {
//   str = str.toLowerCase();
//   return (str.includes("viagra") || str.includes("xxx"));
// };
// console.log(checkSpam("bla bla v, bla lalalaall"));

//Task 8
// let truncate = (str, maxlength) => str.length > maxlength ? str.slice(0, maxlength) + '...' : str.slice(0, maxlength);

// console.log(truncate('Відпочинок зараз більшості українців тільки сниться... Але ж ми не можемо відмінити літо, та й не хочемо! Тож сьогодні в новенькому відео з рубрики', 10));

//Task 9
// let extractCurrencyValue = (str) => +str.substr(1);

// console.log(extractCurrencyValue('$120') === 120);

//Task 10
// function sumInput() {
//   let arr = [];
//   let sum = 0;
//   let needLoop = true;
//   do {
//     let number = prompt('Enter a number:');
//     if (number !== '' && number !== null && !isNaN(number)) {
//       arr.push(+number);
//     } else {
//       needLoop = false;
//     }
//   } while (needLoop);
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
//   return sum;
// }

// sumInput();

//Task 11
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm(' Батьки дозволили ?');
//   }
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm(' Батьки дозволили ?');
// }
//не має різниці, функції повернуть однакові значення

//Task 12
// function checkAge(age) {
//   return (age > 18) ? true : confirm(' Батьки дозволили ?');
// }

// function checkAge(age) {
//   return age > 18 || confirm(' Батьки дозволили ?');
// }

//console.log(checkAge(17));

//Task 13
// let min = (a, b) => a > b ? b : a;

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

//Task 14

// function pow(x, y) {
//   let operation = 1;
//   for (let i = 1; i <= y; i++) {
//     operation *= x;
//   }
//   return operation;
// }

// let isNatural = (num) => (num % 1 === 0 && num > 0) ? true : false;
// let doOperation = true;
// let x = +prompt('Enter natural number:');
// doOperation = isNatural(x);
// if (!doOperation) {
//   alert('The number isn\'t natural');
// } else {
//   let y = +prompt('Enter degree (natural number):');
//   doOperation = isNatural(y);
//   if (!doOperation) {
//     alert('The degree isn\'t natural');
//   } else {
//     console.log(`Result is ${pow(x, y)}`);
//   }
// }

//Task 15
// let ask = (question, yes, no) => confirm(question) ? yes() : no();

// ask(
//   "Ви згодні?",
//   function () { alert("Ви погодилися."); },
//   function () { alert("Ви скасували виконання."); }
// );

//Task 16
// let monthIncome = 3333;
// let monthExpense = 1750;
// let palmCost = 8000;
// let monthsToHoard;
// monthsToHoard = Math.ceil(palmCost / (monthIncome - monthExpense));
// console.log(`Crusoe will have hoaded on a palm tree in ${monthsToHoard} months`);

//Task 17
// function negativeSumInput() {
//   let sum = 0;

//   for (let i = 10; i > 0; i--) {
//     let number = prompt('Enter a number:');
//     if (number !== '' && number !== null && !isNaN(number)) {
//       number = +number;
//       if (number < 0) sum += number;
//     } else {
//       alert('Operation is stopped');
//       return;
//     }
//   }
//   return sum;
// }

// console.log(negativeSumInput());




