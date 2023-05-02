/*
 * try/catch
 * Помилки фази парсингу опрацювати неможна. Тільки помилки фази виконання.
 * Обєкт помилки
 * try/catch працює тільки з синхронним кодом
 * Опрацювання помилок в асинхронному коді
 */

console.log('Start');

// try {
//   console.log('Test');
//   setTimeout(() => {
//     const a = 5;
//     a = 6;
//   }, 1000);
// } catch (err) {
//   console.log(err);
// }

setTimeout(() => {
  try {
    const a = 5;
    a = 6;
  } catch (err) {
    console.log(err);
  }
}, 1000);

console.log('End');
