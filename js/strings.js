'use strict';

/*
 * Конкатенація рядків, шаблонні рядки
 */

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Привіт ім'я_користувача, ваш вік вік_користувача.
*/
// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// console.log('Привіт', userFirstName, ', ваш вік', userAge);

//? Виконайте завдання вище, використовуючи шаблонні рядки
// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// console.log(`Привіт ${userFirstName}, ваш вік ${userAge}`);

/*
 * Властивості і методи рядків
 */

//? Запитайте у користувача ім'я та дізнайтеся, зі скількох символів, воно складається.
// const userFirstName = prompt('Ваше ім`я');
// userFirstName.length;
// console.log(userFirstName.length);

//? Попросіть користувача ввести email і переведіть у нижній регістр.

// const userEmail = prompt('Ваш email');

// console.log(userEmail.toLowerCase());

//? Попросіть користувача ввести email і переведіть у верхній регістр
// const userEmail = prompt('Ваш email');
// console.log(userEmail.toUpperCase());
/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?
  ? Якщо є, дізнайтесь позицію на якій перебуває цей підрядок
*/
// const languages = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';

// const isJSInString = languages.includes('JS');
// const idxOfJSInString = languages.indexOf('JS');

// console.log(`index of JS ${idxOfJSInString}`);

// const isJavaScriptInString = languages.includes('JavaScript');
// const idxOfJavaScriptInString = languages.indexOf('JavaScript');
// console.log(`index of JavaScript ${idxOfJavaScriptInString}`);

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на: %, rem, em або px;
// const str = '   24px   ';

// console.log(str.trim());

//? У нас є рядок '23,4', замініть кому на крапку
// const num = prompt('Введіть якесь число');
// const replacedNum = Number(num.replace(',', '.'));
// console.log(replacedNum);

/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть усі входження dog на monkey.
*/
// const str =
//   'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(str.replaceAll('dog', 'monkey'));

//? У нас є дата у форматі '12:05:21', замініть (:) на (.)
// const someDate = '12:05:21';
// console.log(someDate.replaceAll(':', '.'));

/*
  ? Дано рядок 'Vasyl Ivanenko is 24 years old'.
  ? Скопіюйте з цього рядка окремо ім'я з прізвищем.
*/
// const userName = 'Vasyl Ivanenko is 24 years old';

// const name = userName.slice();
// console.log(name);
