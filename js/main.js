/*
 * Операція spread замість concat і slice
 */

// const arr = [1, 2, 3, 4, 5];

// // const allArr = [].concat(arr);
// const allArr = arr.slice();

// console.log(arr);
// console.log(allArr);

// allArr.push(4);

// console.log(arr);
// console.log(allArr);

//* Копія масива
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = [...numbers];

// // console.log(numbers);
// // console.log(newNumbers);
// // numbers.push(6);
// // newNumbers.push(27);

// console.log(numbers);
// console.log(...numbers);

//* Об'єднання масивів

// const firstArr = [1, 2, 3];
// const secondArr = [8, 9, 10];
// const finishArr = [-1, 0, ...firstArr, 4, 5, ...secondArr, 11, 12, 13];

// console.log(finishArr);

//* Розпилення масиву у функцію

// const nums = [1, 85, 7, 25, -63, 27];

// const max = Math.max(...nums);

// console.log(max);

/*
 * Операція spread замість Object.assign({}, obj)
 */
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };

// const newUser = {
//   gender: 'male',
// };

// const anotherUser = {
//   ...user,
// };

// console.log(user);
// console.log(anotherUser);

// anotherUser.tel = '0961111111';

// console.log(anotherUser);

//* Розпилення складних типів
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };

// const anotherUser = _.cloneDeep(user);

// // console.log(user);
// // console.log(anotherUser);

// anotherUser.lastName = 'Danylko';

// // console.log(user);
// // console.log(anotherUser);

// user.someArr.push(15);
// console.log(user);
// console.log(anotherUser);

/*
 * Операція rest
 */
//? Напишіть функцію sum, яка складає довільну кількість аргументів
// const args = [5, 6, 7];
// function sum(...args) {
//   let total = 0;
//   for (const num of args) {
//     total += num;
//   }
//   return total;
// }

// console.log(args);

// console.log(sum(1, 2, 3, 4));
