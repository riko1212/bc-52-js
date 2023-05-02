/*
 * async/await
 * асинхронна(async) функція ЗАВЖДИ провертає проміс.
 * await заставляє функцію чекати виконання проміса.
 * await неможна використовувати  поза асинхронними функціями.
 * try/catch для вудловлення помилок
 */

// const fn = async () => {
//   console.log('test');

//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// fn();
// console.log(fn());

// const fn2 = async data => {
//   const arr = await data;
//   console.log(arr);
// };

// fn2(fn());

// fn().then(response => {
//   console.log(response);
// });

// console.log(fn());

//? TASK 01
// Перепиши на async/await
// const loadPosts = async url => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   } catch (err) {
//     console.log(err);
//   }
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
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

console.log(wait());

function f() {
  wait()
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
  // ...що тут написати?
  // щоб викликати wait() і дочекатися результату "10" від async-функції
  // не забувайте, тут не можна використовувати "await"
}

f();
