/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */
// const user = {
//   firstName: 'Andrii',
//   age: 40,
//   lastName: 'Smith',
// };

// const user2 = Object.create(user);

// user2.firstName = 'Tony';

// const user3 = Object.create(user2);

// user3.age = 32;

// // console.log('user', user);
// // console.log('user2', user2);
// console.log('user3', user3);
// // console.log('user3', user3.firstName);

// https://uk.javascript.info/article/native-prototypes/native-prototypes-classes.svg

//* Власні та не власні властивості об'єкта

//* Перевірка власних властивостей obj.hasOwnProperty()

// console.log(user3.hasOwnProperty('age'));

// for (const item in user3) {
//   if (user3.hasOwnProperty(item)) {
//     console.log(`${item} : ${user3[item]}`);
//   }
// }
