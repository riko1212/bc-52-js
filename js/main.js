/*
 *  Масиви: літерал масива, елементи, індексація, довжина
 */

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "Rock&Roll" в кінець.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте «Country» та «Reggy» на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];
// console.log(genres);
// genres[2] = 'Rock&Roll';
// console.log(genres.length);
// genres[genres.length] = 'Rock&Roll';
// console.log(genres);
// console.log([genres[0], genres[genres.length - 1]]);
// genres.push('Rock&Roll');
// console.log(genres);
// genres.shift();

// genres.unshift('Reggy', 'Country');
// genres.unshift('Country');

// console.log(genres);

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.length - 1);

/*
 * Присвоєння за посиланням і за значенням
 */

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть до консолі обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/

// let a = 10;
// const b = a;
// console.log(a);
// console.log(b);
// a = 12;

// console.log(a);
// console.log(b);

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть до консолі обидва цих масива
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

// arr1.push(4);

// arr2.push(27);

// console.log(arr1);
// console.log(arr2 === arr1);

/*
 * Перебір масиву циклами for та for...of
 */

/*
? Напиши скрипт для перебору масиву fruits циклом for.
? Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
? Нумерація елементів має починатися з першого.
*/
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
// console.log(i);
// console.log(fruits[i]);
// console.log(`${i + 1}: ${fruits[i]}`);
// }

/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/

// Варіант 1
// const numbers = [2, 17, 94, 1, -20, -1, 23, -40, 37, -50];

// let min = numbers[0];

// for (const item of numbers) {
//   if (item < min) {
//     min = item;
//   }
// }

// Варіант 2

// let min = numbers[0];
// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log(min);

/*
? У нас є масив із зарплатами працівників, потрібно порахувати загальну суму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// for (const salary of salaries) {
//   // total = total + salary;
//   total += salary;
// }

// console.log(total);

/*
? У нас є кілька масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/
// 1 варіант
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];

// let total = 0;
// for (const managerSalary of managerSalaries) {
//   total += managerSalary;
// }

// for (const developersSalary of developersSalaries) {
//   total += developersSalary;
// }

// console.log(total);

// 2 варіант
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];

// const PMSalaries = [800, 1500, 4000];

// // const newArr = []
// const newArr = [].concat(managerSalaries);

// console.log(managerSalaries);

// console.log(newArr);

// managerSalaries.push(500);

// console.log(managerSalaries);

// console.log(newArr);
// const allSalaries = managerSalaries.concat(developersSalaries, PMSalaries);
// console.log(allSalaries);
// let total = 0;

// for (const salary of allSalaries) {
//   total += salary;
// }

// console.log(total);
/*
 * Базові методи: split та join, indexOf та includes, push, slice та splice, concat
 */

/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються в змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/
// const values = '8 11';
// const sidesValues = values.split(' ');

// const area = Number(sidesValues[0]) * Number(sidesValues[1]);
// console.log(area);

// console.log(sidesValues);

/*
? Напиши скрипт, який виводить в консоль ім'я та телефонний номер користувача.
? У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// // console.log(namesArr);
// // console.log(phonesArr);

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/*
? Напиши скрипт, який «розвертає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/

const string = 'Welcome to the future';

// Варіант 1
// const stringArr = string.split('');
// const reverseArr = [];

// for (let i = stringArr.length - 1; i >= 0; i -= 1) {
//   reverseArr.push(stringArr[i]);
// }

// const revereString = reverseArr.join('');

// console.log(string);
// console.log(revereString);

// Варіант 2

// let reverseString = '';
// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reverseString += string[i];
// }
// console.log(string);
// console.log(reverseString);

// Варіант 3

// const reverseString = string.split('').reverse().join('');
// console.log(string);
// console.log(reverseString);
/*
? У нас є масив співробітників, Співробітник Shaw звільнився, видаліть його з масиву
*/

const employees = ['Dennis', 'Show', 'Watkins', 'Ray'];
console.log(employees);

// if (employees.includes('Shaw')) {
//   const idxOfShow = employees.indexOf('Shaw');
//   employees.splice(idxOfShow, 1);
// } else {
//   console.log('No Show');
// }

// console.log(employees);

//? Додати нового співробітника Thornton, перед Watkins;

const idxOfWatkins = employees.indexOf('Watkins');
employees.splice(idxOfWatkins, 1, 'Thornton');

console.log(employees);
