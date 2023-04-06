/*
 * Деструктуризація об'єктів
 */

// const user = {
//   name: 'Andrii',
//   age: 33,
//   gender: 'male',
// };

// const { name, age, gender } = user;

// console.log(name);
// console.log(age);
// console.log(gender);

/*
? Напишіть деструктуруюче присвоєння, яке:
? властивість firstName присвоє до змінної firstName.
? властивість lastName присвоє до змінної lastName.
? властивість age присвоє до змінної userAge.
? властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/
const user = {
  firstName: 'John',
  lastName: 'Reese',
  age: 30,
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// const userAge = user.age
// const isAdmin = user.isAdmin || false

// const { firstName, lastName, age: userAge, isAdmin:admin = false } = user;

// console.log(firstName);
// console.log(lastName);
// console.log(userAge);
// console.log(isAdmin);

/*
 * Глибока деструктуризація об'єктів
 */
// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

// const {
//   employees,
//   langs: { original: originalLang, secondary: secondaryLang },
// } = team;
// console.log(employees);
// console.log(originalLang);
// console.log(secondaryLang);

/*
 * Деструктуризація масивів
 */
// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// // const user1 = names[0];
// // const user2 = names[1];
// // const user3 = names[2];

// const [user1, user2, user3, user4] = names;

// // console.log(user1);
// // console.log(user2);
// // console.log(user3);
// // console.log(user4);

// const rgb = [210, 100, 50];

// const [red, green, blue] = rgb;
