// Task 1
// let i = 3;
// while (i) {
//   alert(i--);
// }
//останнім виведе 1, декрементує один і в наступну умову в тіло циклу не зайде

//Task 2

// let a = 3;
// let b = 1;
// let c = 5;

// if (a < b && b < c) {
//   a *= 2;
//   b *= 2;
//   c *= 2;
// } else {
//   a = -a;
//   b = -b;
//   c = -c;
// }

// console.log(`a = ${a}, b = ${b}, c = ${c}`);

//Task 3
// let a = 6;
// let b = 5;
// let c = 1;

// if (a < b && b < c || a > b && b > c) {
//   a *= 2;
//   b *= 2;
//   c *= 2;
// } else {
//   a = -a;
//   b = -b;
//   c = -c;
// }

// console.log(`a = ${a}, b = ${b}, c = ${c}`);

//Task 4
// let a = 6;
// let b = 6;
// let c = 8;
// let distanceAB;
// let distanceAC;
// distanceAB = a < b ? b - a : a - b;
// distanceAC = a < c ? c - a : a - c;

// if (distanceAB < distanceAC) {
//   console.log(`The closest dot is B and distance = ${distanceAB}`);
// } else if (distanceAB > distanceAC) {
//   console.log(`The closest dot is C and distance = ${distanceAC}`);
// } else {
//   console.log(`The closest dots are B and C, and distance = ${distanceAB}`);
// }

//Task 5
// dotX = -4;
// dotY = 0;

// if (dotX === 0 && dotY === 0) {
//   console.log(0);
// } else if (dotY === 0) {
//   console.log(1);
// } else if (dotX === 0) {
//   console.log(2);
// } else {
//   console.log(3);
// }


//Task 6

// dotX = -4;
// dotY = 3;

// if (dotX > 0 && dotY > 0) {
//   console.log('Dot lies in I quarter');
// } else if (dotX < 0 && dotY > 0) {
//   console.log('Dot lies in II quarter');
// } else if (dotX < 0 && dotY < 0) {
//   console.log('Dot lies in III quarter');
// } else if (dotX > 0 && dotY < 0) {
//   console.log('Dot lies in IV quarter');
// }

//Task 7

// let vertexX1 = 1;
// let vertexY1 = 1;
// let vertexX2 = 1;
// let vertexY2 = 5;
// let vertexX3 = 7;
// let vertexY3 = 5;
// let vertexX4;
// let vertexY4;

// vertexX4 = vertexX1 === vertexX2 ? vertexX3 : (vertexX1 === vertexX3 ? vertexX2 : vertexX1);
// vertexY4 = vertexY1 === vertexY2 ? vertexY3 : (vertexY1 === vertexY3 ? vertexY2 : vertexY1);

// console.log(`The coordinates of forth vertex (${vertexX4},${vertexY4})`);

//Task 8
// let year = +prompt("Enter a year:");
// if (year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0)) {
//   console.log(`The year ${year} is a leap year`);
// } else {
//   console.log(`The year ${year} isn't a leap year`);
// }

//Task 9
// let number = +prompt("Enter a number:");
// let description = "";

// if (number === 0) {
//   description = "нульове ";
// } else {
//   description += number > 0 ? "позитивне " : "негативне ";
//   description += number % 2 ? "непарне " : "парне ";
// }
// description += "число";
// console.log(description);

//Task 10
// let number = +prompt("Enter a number:");
// let description = "";

// description += number % 2 ? "непарне " : "парне ";
// if (number / 100 >= 1) {
//   description += "тризначне ";
// } else if (number / 10 >= 1) {
//   description += "двозначне ";
// } else {
//   description += "однозначне ";
// }
// description += "число";
// console.log(description);

//Task 11
// let i = 0;
// while (++i < 5) alert(i); //1, 2, 3, 4

// let i = 0;
// while (i++ < 5) alert(i); //1, 2, 3, 4, 5

//різні - на момент порівняння ++і повертає збільшене значення, а і++ - старе

//Task 12
// for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4
//for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4
//однакові бо i зростає на 1 в кінці циклу, а не перед alert()

//Task 13
// for (let i = 2; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//Task 14

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

//Task 15
// let number = 0;
// while (number < 100) {
//   number = prompt("Enter a number above 100:");
//   if (number === null) break;
//   number = +number;
// }

//Task 16
// let bound = 10;
// for (let i = 2; i <= bound; i++) {
//   for (let j = 2; j <= bound; j++) {
//     if (!(i % j) && i !== j) {
//       break;
//     } else if (!(i % j) && i === j) {
//       console.log(i);
//       break;
//     }
//   }
// }

//Task 17
// let average;
// let number1 = +prompt("Enter a first number:");
// let number2 = +prompt("Enter a second number:");
// if (!isNaN(number1) && !isNaN(number2)) {
//   average = (number1 + number2) / 2;
//   console.log(average);
// } else {
//   console.log("You entered wrong data");
// }


//Task18
// let number = +prompt("Enter a number:");
// let square;
// if (!isNaN(number)) {
//   square = number ** 2;
//   console.log(square);
// }

//Task 19
// let firstNumber = +prompt("Enter first number:");
// let secondNumber = +prompt("Enter second number:");
// let thirdNumber = +prompt("Enter third number:");
// let maxNumber;
// let minNumber;
// let difference;

// maxNumber = Math.max(firstNumber, secondNumber, thirdNumber);
// minNumber = Math.min(firstNumber, secondNumber, thirdNumber);
// difference = maxNumber - minNumber;
// console.log(`The difference between ${maxNumber} and ${minNumber} is ${difference}`);

//Task 20
// let number = +prompt("Enter a number:");
// if (!isNaN(number)) {
//   let doubleNumber = number % 2 ? false : true;
//   if (doubleNumber) {
//     console.log(`The number ${number} is a double number`);
//   } else {
//     console.log(`The number ${number} isn't a double number`);
//   }
// }

//Task 21
// let a = 44;
// let quantity = a / 10 > 1 ? 2 : 1;
// let sum = Math.trunc(a / 10) + a % 10;

// console.log(`The quantity of symbols in number ${a} = ${quantity}, the sum of numbers = ${sum}`);

//Task 22
// let measure = prompt("Введіть в яку одиницю виміру ви хочете конвертувати(якщо в см - введіть \"см\", якщо в дюйми - введіть \"дюйм\"):");
// let number = +prompt("Введіть значення, що перевести");
// let value;

// switch (measure) {
//   case 'см':
//     value = (number / 2.54).toFixed(2);
//     console.log(`${number} дюймів в буде ${value} см`);
//     break;
//   case 'дюйм':
//     value = (number * 2.54).toFixed(2);
//     console.log(`${number} cм в буде ${value} дюймів`);
//     break;
// }

//Task 23



//Task 24
// let number = +prompt("Введіть трицифрове число:");
// let operation;
// if (!isNaN(number)) {
//   let firstSymbol = Math.trunc(number / 100);
//   let secondSymbol = Math.trunc((number - firstSymbol * 100) / 10);
//   let thirdSymbol = number % 10;
//   let doubleNumber = number % 2 ? false : true;
//   if (doubleNumber) {
//     operation = firstSymbol + secondSymbol + thirdSymbol;
//     console.log(`Число ${number} парне. Сума його цифр = ${operation}`);
//   } else {
//     operation = firstSymbol * secondSymbol * thirdSymbol;
//     console.log(`Число ${number} не парне. Добуток його цифр = ${operation}`);
//   }
// }

//Task 25

// let a = +prompt("Введіть довжину першої сторони трикутника:");
// let b = +prompt("Введіть довжину другої сторони трикутника:");
// let c = +prompt("Введіть довжину третьої сторони трикутника:");
// if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
//   if (a > 0 && b > 0 && c > 0) {
//     if (a + b > c && a + c > b && b + c > a) {
//       console.log(`Трикутник зi сторонами ${a}, ${b}, ${c} існує`);
//     } else {
//       console.log(`Трикутник зi сторонами ${a}, ${b}, ${c} не існує`);
//     }
//   }
// }

//Task 26

// let AX = 4;
// let AY = 9;
// let R = 10;

// if (Math.pow(AX, 2) + Math.pow(AY, 2) <= Math.pow(R, 2)) {
//   console.log(`Точка з координатами (${AX};${AY}) лежить в середині кола з радіусом = ${R}`);
// } else {
//   console.log(`Точка з координатами (${AX};${AY}) лежить за межами кола з радіусом = ${R}`);
// }

