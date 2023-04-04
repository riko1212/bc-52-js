/*
 * Функціональний вираз та оголошення функції.
 * Параметри, аргументи, повернення.
 */

// function назва_функції(параметр_1, параметр_2...) {
// тіло функції
// }

function add(a, b) {
  const res = a + b;
  return res;
}

// const userName = prompt('Ваше Імя');
// const userAge = prompt('Ваше Вік');

//* Function declaration

// function add(a, b) {
//   const res = a + b;
//   return res;
// }

// const result = add(5, 8);
// console.log(result);

//* Function expresion

// const addition = function (numA, numB) {
//   return numA + numB;
// };

// console.log(addition(8, 15));

/*
? Напиши функцію calcBMI(weight, height) яка розраховує і повертає індекс маси тіла людини.
? Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
? Вага і висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
? тобто як роздільник дробової частини може бути кома.
? Індекс маси тіла необхідно округлити до однієї цифри після коми;
*/

// const calcBMI = function (weight, height) {
//   weight = Number.parseFloat(weight.replace(',', '.'));
//   height = Number.parseFloat(height.replace(',', '.'));
//   // const result = weight / height ** 2;
//   return (weight / height ** 2).toFixed(1);
// };

// const userBMI = calcBMI('88.7', '1,85');

// console.log(userBMI);

/*
? Напишіть функцію min(a, b), яка повертає менше з чисел a і b.
*/

// const min = function (a, b) {
//   const min = a < b ? a : b;
//   return min;
// };

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

/*
? Напишіть функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких буде передано до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// const getRectArea = function (dimensions) {
//   const areaArr = dimensions.split(' ');
//   return Number(areaArr[0]) * Number(areaArr[1]);
// };

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцію logItems(items), яка отримує масив і використовує цикл for,
? який для кожного елемента масиву буде виводити до консоля повідомлення
? у форматі < номер елемента > - < значення елемента >. Нумерація елементів повинна починатися з 1.
? Наприклад, для першого елемента масиву ['Mango','Poly','Ajax'] з індексом 0 буде виведено 1 - Mango,
? а для індексу 2 виведе 3 - Ajax.
*/

// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Напишіть функцію printContactsInfo(names, phones), яка виводить у консоль ім'я і телефонний номер користувача.
? Параметри names і phones будуть передані рядками, розділені комами.
? Порядковий номер імен і телефонів у рядках вказують на відповідність.
? Кількість імен і телефонів гарантовано однакова.
*/

// function printContactsInfo(names, phones) {
//   names = names.split(',');
//   phones = phones.split(',');

//   for (let i = 0; i < phones.length; i += 1) {
//     console.log(`${names[i]}: ${phones[i]}`);
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );
// printContactsInfo(
//   'Vera,Carr,Violet,Sherman',
//   '89001234567,89001112233,890055566377,890055566300'
// );

/*
? Напишіть функцію findLargestNumber(numbers) яка шукає найбільше число в масиві.
*/

// const findLargestNumber = function (numbers) {
//   let max = numbers[0];

//   for (i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// };

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення.
? Всі аругменти будуть тільки числами.
*/

// const calcAverage = function () {
//   console.log(arguments);
//   let total = 0;
//   for (const arg of arguments) {
//     total += arg;
//   }
//   return total / arguments.length;
// };

// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс в кінець колекції
? removeCourse(name) - видаляє курс з колекції
? updateCourse(oldName, newName) - змінює назву курса
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// const addCourse = function (name) {
//   if (courses.includes(name)) {
//     console.log('У вас вже є такий курс');
//     return;
//   }
//   courses.push(name);
// };

// const removeCourse = function (name) {
//   if (courses.includes(name)) {
//     const idxOfEl = courses.indexOf(name);
//     courses.splice(idxOfEl, 1);
//     return;
//   }
//   console.log(`Курс за  назвою ${name} не знайдено`);
// };

// const updateCourse = function (oldName, newName) {
//   if (courses.indexOf(oldName) < 0) {
//     console.log(`Курса за назвою ${oldName} не знайдено`);
//     return;
//   }
//   const idxOfOld = courses.indexOf(oldName);
//   courses.splice(idxOfOld, 1, newName);
// };

// console.log(courses);
// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас вже є такий курс'
// console.log(courses);

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс за такою назвою не знайдено'
// console.log(courses);

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse('С++', 'PHP'); // 'Курса за такою назвою не знайдено'
// console.log(courses);

function fn1() {
  console.log('fn1');
}
function fn2() {
  console.log('fn2');
}
function fn3() {
  console.log('fn3');
}

fn1();
fn2();
fn3();
