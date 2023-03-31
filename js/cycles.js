/*
 * Цикли (while, do while, for)
 */

/*
 * While
 */

// while (condition) {
// код, тіло цикла (statement)
// }

/*
? Виведіть числа від 1 до 50
*/
// let iterator = 1;

// while (iterator <= 50) {
//   console.log(iterator);
//   // iterator = iterator + 1;
//   iterator += 1;
// }

/*
? Знайдіть суму чисел від 1 до 100
 */
// let iterator = 1;
// let res = 0;

// while (iterator <= 100) {
//   res += iterator;
//   iterator += 1;
// }

// console.log(res);

/*
? Дано число n = 1000.
? Ділить його на 2 стільки разів, поки результат поділу не стане менше 50.
? Яке число вийде?
? Порахуйте кількість ітерацій, необхідних для цього, та запишіть його в змінну num.
*/
// let n = 1000;
// let num = 0;

// while (n / 2 >= 50) {
//   num += 1;
//   // n = n / 2;
//   n /= 2;
// }

// console.log(n / 2);
// console.log(num);

/*
 * Do While
 */
// do {
// statement
// } while (condition);

// do {
//   console.log('do');
// } while (false);

/*
? Напишіть цикл, який пропонує в prompt ввести число більше 100.
? Якщо відвідувач ввів інше число – попросити ввести ще раз.
? Цикл повинен запитувати число, поки відвідувач не введе число, більше 100.
? Передбачається, що відвідувач вводить лише числа;
*/
// let number = Number(prompt('Введіть число більше 100'));

// while (number <= 100) {
//   number = Number(prompt('Введіть число більше 100'));
// }
// console.log(number);

// let number;

// do {
//   number = Number(prompt('Введіть число більше 100'));
// } while (number <= 100);
// console.log(number);
/*
 * For
 */
// for (initialization; condition; post - expression) {
//   statements
// }

// for (let i = 50; i >= 0; i -= 1) {
//   console.log(i);
// }

// let num = 0;

// for (n = 1000; n / 2 >= 50; n /= 2) {
//   num += 1;
// }

// console.log(n / 2);
// console.log(num);

// let n = 1000;
// let num = 0;

// while (n / 2 >= 50) {
//   num += 1;
//   // n = n / 2;
//   n /= 2;
// }

// console.log(n / 2);
// console.log(num);

/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

// Спосіб 1

// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// Спосіб 2
// for (let i = 1; i <= 100; i += 1) {
//   let str = '';
//   if (i % 3 === 0) {
//     str += 'Fizz';
//   }

//   if (i % 5 === 0) {
//     str += 'Buzz';
//   }

//   // if (str === '') {
//   //   str = i;
//   // }

//   console.log(str || i);
// }

/*
 ? Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чином:
 ? *
 ? **
 ? ***
 ? ****
 ? *****
 ? ******
 ? *******
 */

for (let i = 0, star = ''; i < 7; i += 1) {
  star += '*';
  console.log(star);
}
