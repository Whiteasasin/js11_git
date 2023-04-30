
/// task 1

// let i = 0
// while (confirm('dayn?')) {
//      alert('yveren?')
//      i++
// }
// alert(`ну ты шляпа ${i} раз жмакать по этой фигне .`)


///task 2
// let arr = [];

// while (true) {
//   let input = prompt('Введіть значення для масиву');

//   if (input === null) {
//     break;
//   }

//   arr.push(input);
// }

// console.log(arr); 

/// task 3 

// let arr = [];
// let i = 0;

// while (true) {
//   let input = prompt('Введіть значення для масиву');

//   if (input === null) {
//     break;
//   }

//   arr[i] = input;
//   i++;
// }

// console.log(arr);

/// task 4 

// let count = 0;

// while (true) {
//   if (Math.random() > 0.9) {
//     break;
//   }
//   count++;
// }

// alert(`Кількість ітерацій: ${count}`);

/// /task 5

// while (true) {
//   let input = prompt('Введіть значення');

//   if (input === null) {
//     continue;
//   }

//   alert(`Ваше значення: ${input}`);
// }

/// task 6 

// let N = 10; 

// let sum = 0;
// for (let i = 1; i <= N; i += 3) {
//   sum += i;
// }

// console.log(`Сума арифметичної прогресії від 1 до ${N} з кроком 3: ${sum}`);

/// task 7 

// let length = 5; 
// let result = ''; 

// for (let i = 0; i < length; i++) {
//   result += '# '; 
// }

// console.log(result); 

/// task 8 

// let result = ''; 

// for (let i = 0; i < 10; i++) { 
//   for (let j = 0; j < 10; j++) { 
//     result += j; 
//   }
//   result += '\n'; 
// }

// console.log(result); 

/// task 9 
// let rows = 10; // кількість рядків
// let cols = 11; // кількість стовпців
// let result = ''; // початковий рядок порожній

// for (let i = 0; i < rows; i++) { 
//   for (let j = 0; j < cols; j++) { 
//     if ((i + j) % 2 === 0) {
//       result += '#';
//     } else {
//       result += '.'; 
//     }
//   }
//   result += '\n'; 
// }

// console.log(result);

/// task 10 

// let N = prompt("Введіть кількість елементів масиву:");

// let cubes = []; 

// for (let i = 0; i < N; i++) {
//   cubes.push(i ** 3); 
// }

// console.log(cubes);

/// task 11

// let size = prompt("Введіть розмірність таблиці множення:");

// let multiplicationTable = [];

// for (let i = 1; i <= size; i++) {
//   multiplicationTable[i] = []; // створюємо новий порожній масив для i-того рядка
//   for (let j = 1; j <= size; j++) {
//     multiplicationTable[i][j] = i * j; // додаємо добуток до відповідного елементу таблиці
//   }
// }

// console.log(multiplicationTable);

/// task 12

// function readArrayOfObjects() {
//   const array = [];

//   while (true) {
//     let obj = {};
//     while (true) {
//       let key = prompt("Введіть ключ для об'єкта:");
//       if (!key) break;
//       let value = prompt("Введіть значення для ключа " + key + ":");
//       obj[key] = value;
//     }
//     if (Object.keys(obj).length === 0) break;
//     array.push(obj);
//     if (!confirm("Бажаєте додати ще один об'єкт?")) break;
//   }

//   return array;
// }

/// task 13 

// let size = 11; 
// let halfSize = (size - 1) / 2; 

// // Верхня часть 
// for (let i = 0; i < halfSize; i++) {
//   let row = '';
//   for (let j = 0; j < size; j++) {
//     if (j >= halfSize - i && j <= halfSize + i) {
//       row += '#';
//     } else {
//       row += '.';
//     }
//   }
//   console.log(row);
// }

// // серцевина 
// let middleRow = '';
// for (let i = 0; i < size; i++) {
//   middleRow += '#';
// }
// console.log(middleRow);

// // низ 
// for (let i = halfSize - 1; i >= 0; i--) {
//   let row = '';
//   for (let j = 0; j < size; j++) {
//     if (j >= halfSize - i && j <= halfSize + i) {
//       row += '#';
//     } else {
//       row += '.';
//     }
//   }
//   console.log(row);
// }

/// task 14







// task 15
