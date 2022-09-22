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
