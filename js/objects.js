/*
 * Створення об'єкта (конструктор, литерал).
 * Властивості, ключі (ім'я) та значення
 */

const obj = {
  name: 'Andrii',
  age: 40,
  time: '12.00',
  wether: 'Sun',
};

// console.log(obj['name']);

// obj.lastName = 'Danylko';
// obj.name = 'Ihor';

// const arr = ['newName', 'Andrii'];

// obj[arr[0]] = arr[1];

// console.log(obj.getName());

/*
 * Доступ до властивостей(obj.key, obj[key]).
 * Додавання та зміна властивостей
 */

/*
 * Методи об'єкта. this при зверненні до властивостей у методах
 */

/*
 * - changeTitle(newTitle) - змінює назву фільму
 * - addActor(newActor) - додає актора
 * - updateRating(newRating) - оновлює рейтинг фільму
 * - isAdult - перевіряє вікове обмеження на фільм
 */

/*
 * for...in, Object.keys, Object.values
 */

// const values = Object.values(obj);

// console.log(values);

/*
 * Операція spread замість concat і slice. Копія масива. Об'єднання масивів
 */

// const arr = [1, 2, 3];

// console.log(arr);

// const arr1 = [...arr];

// arr1.push(4);

// console.log(arr1);

//* Розпилення масиву у функцію

// const max = Math.max(...arr);

// console.log(max);

//* Розпилення складних типів

/*
 * Операція rest
 */

const fn = function (data) {
  const { name, age, ...otherProp } = data;
  console.log(name);
  console.log(age);
  console.log(otherProp);
};

fn(obj);

/*
 * Деструктуризація об'єктів
 */
/*
 * Глибока деструктуризація об'єктів
 */

/*
 * Паттерн об'єкта
 */
