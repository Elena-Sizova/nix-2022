// Task 1 

// let admin;
// let name;

// name = 'Olena';
// admin = name;

// alert(admin);


//Task 2

// const BIRTHDAY = '18.04.1982' ; // Використовувати великі літери?
// const AGE = someCode( BIRTHDAY ); // а тут ?

/*Можна, головне щоб при об'яві і використанні константи регістр був однаковий */

//Task 3

// let name = "Ilya " ;
// alert ( ` hello ${ 1 } ` ); // hello 1
// alert ( ` hello ${ "name " } `); //hello name
// alert ( ` hello ${ name } ` ); // hello Ilya

//Task 4
"" + 1 + 0 //'10'
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 //NaN
7 / 0 // Infinity
" – 9 " + 5 // '-95'
" – 9 " - 5 //NaN, може тут зайвий пробел перед 9 - якщо написати так: "-9" - 5 буде -14
null + 1 // 1
undefined + 1 // NaN


//Task 5
// let a = 1, b = 1;
// let c = ++a; // с == 2
// let d = b++; // d == 1

//Task 6
// let a = 2;
// let x = 1 + (a *= 2); // a === 4, x===5

//Task 7

5 > 4; //true
"ананас" > "яблуко"; //false
"2" > "12"; //true
undefined == null; // true, при нестрогом равенстве равны, но не равны другим значениям
undefined === null; //false, при строгом - нет
null == "\n0\n"; //false
null === +"\n0\n"; //false

//Task 8
// let userName = prompt("What is your name?");
// alert(userName);


//Task 9
// if ("0") {
//   alert( ' Привіт');
//  }; //так строка "0" у дужках перетворюється на true

//Task 10

// let languageName = prompt("What is an 'official' name of JavaScript?");
// if (languageName === "ECMAScript") {
//   console.log("You're right!");
// } else {
//   console.log("Don't you know? ECMAScript!");
// }

//Task 11
// let newNumber = +prompt("Enter a number");
// if (newNumber > 0) {
//   console.log(1);
// } else if (newNumber < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// };

//Task 12
// let result;
// let a = +prompt("Enter a:");
// let b = +prompt("Enter b:");

// result = a + b < 4 ? 'Мало' : 'Багато';
// console.log(result);

//Task 13
// let message;
// message = login == 'Співробітник' ? ' Привіт ' :
//   (login == 'Директор' ? ' Добрий день! ' :
//     (login == '' ? 'Відсутній логін' : ''));

//Task 14

//alert(null || 2 || undefined); // 2 (преобразує null в false, а 2 в true)

//Task 15

//alert(alert(1) || 2 || alert(3)); // Виведе перше виконане alert: 1 (але ця функція повертає undefined, яке преобразується на false), потім вивиде 2, як перше зустрічне true і завершить роботу

//Task 16

//alert(1 && null && 2); // null (1 перетворюється на true, null - false, виведе false)

//Task 17
//alert(alert(1) && alert(2)); // 1 і undefined (виведе результат виконання першої функції - 1, але вона повертає нічого, тобто undefined, потім перевірить другу функцію, котра теж нічого не повертає і поверне undefined)

//Task 18

//alert(null || 2 && 3 || 4); // 3 (спочатку виконається логічне "І", виведеться останній true-елемент, а потім при логічному "або" виведеться перший true-елемент, тобто 3)

//Task 19
// let age = +prompt("Enter an age");
// if(age >= 14 && age <= 90) {
//   console.log("Your age is between 14 and 90");
// } else {
//   console.log("Your age isn't between 14 and 90");
// }

//Task 20

// let age = +prompt("Enter an age");
// if (!(age >= 14 && age <= 90)) {
//   console.log("Your age is less than 14 or bigger than 90");
// } else {
//   console.log("Your age is between 14 and 90");
// }

//second variant

// let age = +prompt("Enter an age");
// if (age <= 14 || age >= 90) {
//   console.log("Your age is less than 14 or bigger than 90");
// } else {
//   console.log("Your age is between 14 and 90");
// }

//Task 21

// if (-1 || 0) alert('first'); //так, true або..
// if (-1 && 0) alert('second');//ні, true i false == false
// if (null || -1 && 1) alert('third'); //так, -1 i 1 == 1, null або 1 == 1, тобто true

//Task 22
// let login = prompt("Введіть логін:");
// let password;

// if (login === 'Адмін') {
//   password = prompt("Введіть пароль");
//   if (password === "я головний") {
//     console.log("Здрастуйте!");
//   } else if (password !== null) {
//     console.log("Не вірний пароль!");
//   } else {
//     console.log("Скасовано!");
//   }
// } else if (login !== null) {
//   console.log("Я вас не знаю");
// } else {
//   console.log("Скасовано");
// };

//Task 23
// if(browser === 'Edge') {
//   alert(" You've got the Edge! ");
// } else if(browser === 'Chrome'|| browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//   alert( ' Okay we support these browsers too' );
// } else {
//   alert( ' We hope that this page looks ok!' );
// };

//Task 24

// let a = +prompt('a?', '');

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert('2,3');
// }

//Task 25

// let number = +prompt("Введіть ціле число:");
// if (number > 0) number += 1;
// console.log(number);

//Task 26
// let number = +prompt("Введіть ціле число:");
// number = number > 0 ? number + 1 : number - 2;
// console.log(number);

//Task 27
// let number = +prompt("Введіть ціле число:");
// if (number > 0) {
//   number += 1;
// } else if (number < 0) {
//   number -= 2;
// } else {
//   number = 10;
// }
// console.log(number);

//Task 28
// let num1 = 3;
// let num2 = -4;
// let num3 = 1;
// let positive = 0;

// if (num1 > 0) positive += 1;
// if (num2 > 0) positive += 1;
// if (num3 > 0) positive += 1;

// console.log(positive);

// Task 29
// let num1 = -5;
// let num2 = -4;
// let num3 = 5;
// let positive = 0;
// let negative = 0;

// if (num1 > 0) {
//   positive += 1;
// } else if (num1 < 0) {
//   negative += 1;
// };
// if (num2 > 0) {
//   positive += 1;
// } else if (num2 < 0) {
//   negative += 1;
// };
// if (num3 > 0) {
//   positive += 1;
// } else if (num3 < 0) {
//   negative += 1;
// };
// console.log(`positive: ${positive}, negative: ${negative}`);

// Task 30
// let num1 = 5;
// let num2 = 1;

// if (num1 > num2) {
//   console.log(`Найбільше число ${num1}`);
// } else {
//   console.log(`Найбільше число ${num2}`);
// };

// Task 31
// let num1 = 6;
// let num2 = 11;

// if (num1 < num2) {
//   console.log(`Найменше число ${num1}`);
// } else {
//   console.log(`Найменше число ${num2}`);
// };

// Task 32
// let num1 = -9;
// let num2 = 3;

// if (num1 > num2) {
//   console.log(num1);
//   console.log(num2);
// } else {
//   console.log(num2);
//   console.log(num1);
// };

// Task 33
// let a = 4;
// let b = 1;
// let c;

// if (a > b) {
//   c = a;
//   a = b;
//   b = c;
// }
// console.log(`a = ${a}, b = ${b}`);

//Task 34
// let a = 7;
// let b = 7;
// let c;

// if (a !== b) {
//   a += b;
//   b = a;
// } else {
//   a = 0;
//   b = 0;
// }
// console.log(`a = ${a}, b = ${b}`);

//Task 35

// let a = 1;
// let b = 12;
// let c;

// if (a !== b) {
//   if (a > b) {
//     b = a;
//   } else {
//     a = b;
//   }
// } else {
//   a = 0;
//   b = 0;
// }
// console.log(`a = ${a}, b = ${b}`);

// Task 36
// let a = 1;
// let b = 4;
// let c = 5;

// if (a < b) {
//   if (a < c) {
//     console.log(`Найменше число а = ${a}`);
//   } else {
//     console.log(`Найменше число c = ${c}`);
//   }
// } else {
//   if (b < c) {
//     console.log(`Найменше число b = ${b}`);
//   } else {
//     console.log(`Найменше число c = ${c}`);
//   }
// }

//Task 37

// let a = 1;
// let b = 2;
// let c = 3;
// let result;

// if (a > b) {
//   if (b > c) {
//     result = b;
//   } else {
//     if (a > c) {
//       result = c;
//     } else {
//       result = a;
//     }
//   }
// } else {
//   if (a > c) {
//     result = a;
//   } else {
//     if (b > c) {
//       result = c;
//     } else {
//       result = b;
//     }
//   }
// }
// console.log(`Середнє число ${result}`);

// Task 38

// let a = 1;
// let b = 2;
// let c = 3;
// let max;
// let min;

// min = a > b ? (b > c ? c : b) : (a < c ? a : b);
// max = a > b ? (a > c ? a : c) : (b > c ? b : c);

// console.log(min);
// console.log(max);

//Task 39
// let a = 2;
// let b = 1;
// let c = 3;
// let biggestSum;

// biggestSum = a > b ? (b > c ? (a + b) : (a + c)) : (a > c ? (a + b) : (b + c));

// console.log(biggestSum);

//Task 40
let a = 2;
let b = 3;
let c = 2;
let differentNumber;

differentNumber = a === b ? c : (b === c ? a : b);

console.log(differentNumber);




