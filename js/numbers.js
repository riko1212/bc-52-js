/*
 * Математичні оператори (+, -, *, /, %, **)
 */

/*
 ? Дано два числа 20 та 10.
 ? Проведіть над цими числами математичні операції (+ - / * %).
*/

// const numA = 22;
// const numB = 10;

// const sum = numA + numB;
// console.log('numA + numB: ', sum);

// const division = numA / numB;
// console.log('numA / numB: ', division);

// const multiply = numA * numB;
// console.log('numA * numB: ', multiply);

// const substraction = numA - numB;
// console.log('numA - numB: ', substraction);

// const result = numA % numB;
// console.log('numA % numB: ', result);

//? Перевірте чи парні числа 15, 20, 45, 30.
// const numA = 15;
// console.log('numA = 15:', numA % 2);

// const numB = 20;
// console.log('numB = 20:', numB % 2);
// const numC = 45;
// console.log('numC = 45:', numC % 2);
// const numD = 30;
// console.log('numD = 30:', numD % 2);
/*
  ? Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/
// const totalMinutes = 1000;

// const hours = Math.floor(totalMinutes / 60);

// const minutes = totalMinutes % 60;

// console.log('hours:', hours);
// console.log('minutes', minutes);

/*
 * Number, Number.parseInt(), Number.parseFloat()
 */

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/

// const num = Number(prompt('Введіть число'));
// let newNum = Number(num);
// console.log(num);
// console.log(typeof num);

//? Даний рядок '24px', дістаньте з цього рядка ціле число.
// const str = '24px';
// const num = Number.parseInt(str);
// console.log(num);

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.
// const str = '25.5%';

// const num = Number.parseFloat(str);
// console.log(num);

//? Спробуйте призвести до числа, рядок 'abc'.
// const str = 'abc';
// const num = Number(str);

// console.log(num);

//? Запросіть у користувача ввести два числа, додайте їх та виведіть результат у консоль.
// const NumA = Number(prompt('Введіть перше число'));
// const NumB = Number(prompt('Введіть друге число'));
// const sum = NumA + NumB;

// console.log(sum);

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

/*
  ? Дано число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/
// const number = 23.5;
// const result = Math.round(number);

// console.log(result);

console.log(Math.max(25, 8, 58, 23, 25));

/*
  ? Попросіть користувача ввести число та степінь.
  ? Піднесіть число до степеня і виведіть результат у консоль.
*/
// const number = Number(prompt('Введіть число'));
// const pow = Number(prompt('Введіть степінь'));

// const result = number ** pow;

// console.log(result);

/*
  ? Згенеруйте рандомне число:
  ? від 0 до 1;

*/

// const randomNumber = Math.round(Math.random() * 10);
// console.log(randomNumber);

//? Згенеруйте рандомне число. Мінімальне та максимально значення, отримати від користувача

// const min = Number(prompt('Введіть мін. значення діапазону'));
// const max = Number(prompt('Введіть макс. значення діапазону'));

// // const randomNumber = Math.round(min + Math.random() * (max - min));

// const randomNum = Math.floor(min + Math.random() * (max + 1 - min));

// const randomNum = Math.round(min - 0.5 + Math.random() * (max - min + 1));

// console.log(randomNumber);

// const generateRandomNumbure = (min, max) => {
//   return Math.round(min - 0.5 + Math.random() * (max - min + 1));
// };

// let count1 = 0;
// let count2 = 0;
// let count3 = 0;

// for (let i = 0; i < 100; i += 1) {
//   const randomNumber = generateRandomNumbure(1, 3);

//   switch (randomNumber) {
//     case 1: {
//       count1 += 1;
//       break;
//     }

//     case 2: {
//       count2 += 1;
//       break;
//     }

//     case 3: {
//       count3 += 1;
//       break;
//     }
//   }
// }

// console.log(`1: ${count1}`);
// console.log(`2: ${count2}`);
// console.log(`3: ${count3}`);
