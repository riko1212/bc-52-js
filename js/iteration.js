/*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників

// Варіант 1
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// console.log(salaries);

// const allSaleries = Object.create(salaries);

// allSaleries.Andrii = 200;

// let total = 0;
// for (const salary in salaries) {
//   if (salaries.hasOwnProperty(salary)) {
//     total += salaries[salary];
//   }
// }

// console.log(total);
// Варіант 2
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// // const salariesKeys = Object.keys(salaries);
// // console.log(salariesKeys);
// let total = 0;
// for (const key of Object.keys(salaries)) {
//   // console.log(salaries[key]);
//   total += salaries[key];
// }

// console.log(total);

// Варіант 3

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// const salaryValues = Object.values(salaries);
let total = 0;

for (const value of Object.values(salaries)) {
  // console.log(value);
  total += value;
}

console.log(total);
