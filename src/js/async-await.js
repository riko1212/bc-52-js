/*
 * async/await
 * асинхронна(async) функція ЗАВЖДИ провертає проміс.
 * await заставляє функцію чекати виконання проміса.
 * await неможна використовувати  поза асинхронними функціями.
 * try/catch для вудловлення помилок
 */

//? TASK 01
// Перепиши на async/await
// const loadPosts = url => {
// return fetch(url).then(response => {
//   if (!response.ok) {
//     throw new Error(response.status);
//   }

//   return response.json();
// });
// };

// loadPosts('https://jsonplaceholder.typicode.com/posts')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 02
// Є «звичайна» функція. Як можна всередині неї отримати результат виконання async-функції?
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {

// ...що тут написати?
// щоб викликати wait() і дочекатися результату "10" від async-функції
// не забувайте, тут не можна використовувати "await"
// }

// f();
