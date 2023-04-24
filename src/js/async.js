/*
 * Синхронний vs Асинхронний JS

 */

// const fn = () => {
//   console.log('In function');
// };

// setTimeout(() => {
//   console.log('in timeout');
// }, 0);

// console.log('Start');

// fn();

// console.log('End');
//*  Стек виклику функцій (http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!)

//* Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

const timoutId = setTimeout(() => {
  console.log('in timeout');
}, 5000);

clearTimeout(timoutId);

let i = 0;

const intervalId = setInterval(() => {
  i += 1;
  console.log(i);
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

//* Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)
