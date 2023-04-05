/*
? Напиши скрипт, який для об'єкта user послідовно:
? додає властивість mood зі значенням 'happy'
? замінює значення hobby на 'skydiving'
? замінює значення premium на false
? виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
*/
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: false,
// };

/*
? У нас є об'єкт, де зберігаються зарплати нашої команди.
? Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній total.
? Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
*/
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

/*
? Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю.
? Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям.
*/
const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

console.log(calcTotalPrice(stones, 'Смарагд')); // 5200
console.log(calcTotalPrice(stones, 'Діамант')); // 8100
console.log(calcTotalPrice(stones, 'Аконіт')); // Каменя за такою назвою не знайдено
