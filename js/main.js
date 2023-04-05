/*
 * Створення об'єкта (конструктор, литерал).
 * Властивості, ключі (ім'я) та значення
 */

// const user = {
//   firstName: 'Andrii',
//   lastName: 'Danylko',
//   age: 40,
//   login: 'test@gmail.com',
// };

// console.log(user['age']);
// console.log(user.age);

/*
 * Доступ до властивостей(obj.key, obj[key]).
 * Додавання та зміна властивостей
 */

// user.tel = '+3809600000000';
// user.age = 33;

// console.log(user);

/*
 * Короткий запис властивостей
 */

/* <input type="text" name="username"> */
/* <input type="email" name="useremail"> */

// const firstName = 'Andrii';
// const userEmail = 'test@gmail.com';

// const user = {
//   firstName,
//   userEmail,
// };

// console.log(user);

/*
 * Присвоєння за посиланням
 */

// const user = {
//   firstName: 'Brett',
//   lastName: 'Romero',
//   age: 20,
// };

// const copyUser = user;

// console.log('user: ', user);
// console.log('copyUser: ', copyUser);

// user.age = 40;

// console.log('user: ', user);
// console.log('copyUser: ', copyUser);

/*
 * Все у цьому світі об'єкти
 */

// const arr = [1, 2, 3, 4];

// console.log(typeof arr);

// const obj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   length: 4,
// };
// console.log(typeof obj);

// const fn = function () {
//   console.log('hi');
// };

// console.dir(typeof fn);

// fn.age = 40;

// console.dir(fn);

// const num = Number(5);

// console.log(typeof num);
