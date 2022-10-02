'use strict'

//Task 1
// function camelize(str) {
//   let arr = str.split('-');
//   arr = arr.map((element, index) => (index !== 0 && element !== '') ? element[0].toUpperCase() + element.slice(1) : element);
//   return arr.join('');
// }
// console.log(camelize("background-color"));// == 'backgroundColor';
// console.log(camelize("list-style-image"));// == 'listStyleImage';
// console.log(camelize("-webkit-transition"));// == 'WebkitTransition';

// //Task 2
// function filterRange(arr, a, b) {
//   return arr.filter(element => element >= a && element <= b);
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered); // 3,1 (збігаються значення)
// console.log(arr); // 5,3,8,1 (без змін)

//Task 3
// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > b || arr[i] < a) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// let arr1 = [5, 3, 8, 1];
// filterRangeInPlace(arr1, 1, 4); // видалені числа поза діапазоном 1..4
// console.log(arr1); // [3, 1]

//Task 4
// let arr = [5, 2, 1, -10, 8];
// arr.sort((prev, next) => next - prev);
// console.log(arr); // 8, 5, 2, 1, -1

//Task 5
// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без змін)

//Task 6
// let operation = {
//   "+": (a, b) => a + b,
//   "-": (a, b) => a - b,
//   "*": (a, b) => a * b,
//   "/": (a, b) => (a / b),
// }
// function calculate(a, b, sign) {
//   return operation[sign](a, b);
// }

// let expression = prompt("Enter numeric expression to calculate two numbers without spaces. Calculator works with +, -, *, /");
// let arr = expression.split('');
// let firstNumber = +arr[0];
// let sign = arr[1];
// let secondNumber = +arr[2];

// console.log(calculate(firstNumber, secondNumber, sign));

//Task 7
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [vasya, petya, masha];

// let names = users.map((element) => element.name);

// console.log(names); // Вася, Петя, Маша

//Task 8
// function sortByAge(arr) {
//   return arr.sort((prev, next) => prev.age - next.age);
// }
// let vasya = { name: " Вася ", age: 25 };
// let petya = { name: " Петя ", age: 30 };
// let masha = { name: " Маша ", age: 28 };
// let arr = [vasya, petya, masha];
// sortByAge(arr);
// console.log(arr);
// // тепер : [ vasya , masha , petya ]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петро

//Task 9
// function getAverageAge(arr) {
//   return arr.reduce((sum, element) => (sum + element.age), 0) / (arr.length);
// }
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [vasya, petya, masha];
// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

//Task 10
// function unique(arr) {
//   let newArr = [];
//   for (let el of arr) {
//     if (!newArr.includes(el)) {
//       newArr.push(el);
//     }
//   }
//   return newArr;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"];
// alert(unique(strings)); // кришна, харе, :-O

//Task 11
// function unique(arr) {
//   let newSet = new Set(arr);
//   let uniqueArr = [];
//   newSet.forEach(element => uniqueArr.push(element));
//   return uniqueArr;
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"];
// console.log(unique(values)); // Hare,Krishna,:-O

//Task 12
// function makeCounter() {
//   let count = 0;
//   return function() {
//     return count++;
//   };
// }
//   let counter = makeCounter();
//   let counter2 = makeCounter();
//   alert (counter ()); // 0
//   alert (counter ()); // 1
//   alert (counter2 ()); //0 При кожному виклику MakeCounter() створюється новий контекст функціїї і нове лексичне отточення, counter2 не має доступу до значення count в функції counter. Він має доступ тільки до count = 0б що був створенний при визові MakeCounter вдруге.
//   alert (counter2 ()); //1 так,як функція вкладена, об'явлена всередені makeCounter, то вона має доступ до змінної count з поточним значенням

//Task 13
// function Counter() {
//   let count = 0;
//   this.up = function () {
//     return ++count;
//   };
//   this.down = function () {
//     return --count;
//   };
// }
// let counter = new Counter();
// alert(counter.up()); //1
// alert(counter.up()); //2
// alert(counter.down()); //1
// //обидві функції було створено одним конструктором, вони мають те саме лексичне оточення і доступ до однієї змінної count, тому її значення буде змінюватись при виконанні кожної з них

//Task 14
// function factorial(n) {
//   if (n == 1) {
//     return n;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// alert(factorial(5)); // 120
// alert(factorial(12));