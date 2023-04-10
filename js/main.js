/*
 * Функції з побічними ефектами та чисті функції
 */
// const numbers = [1, 2, 3, 4, 5];

// const doubleNumbers = (num) => {
//   const newArr = [...num];
//   for (let i = 0; i < newArr.length; i += 1) {
//     newArr[i] += 2;
//   }
//   return newArr;
// };

// console.log(doubleNumbers(numbers));
// console.log(numbers);

//! Dirty function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (...args) => {
//   numbers.push(...args);
// };

// pushNumbers(9, 6, 8);

// console.log(numbers);

//? Clear function

const numbers = [1, 2, 3, 4, 5];

const pushNumbers = (arr, ...args) => {
  const copyNumbers = [...arr];
  copyNumbers.push(...args);

  return copyNumbers;
};

console.log(pushNumbers(numbers, 9, 6, 8));

console.log(numbers);

//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = arr => {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] *= 2;
//   }
// };

// doubleMulti(numbers);

// console.log(numbers);

//? Clear function

// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = (arr) => {
//   const tempNumbers = [...arr];
//   for (let i = 0; i < tempNumbers.length; i += 1) {
//     tempNumbers[i] *= 2;
//   }
//   return tempNumbers;
// };

// console.log(doubleMulti(numbers));

// console.log(numbers);
