/*
 * Примітивні типи даних: number, string, boolean, null та undefined, BigInt, Symbol.
 */
/*
 * Виведення даних: console.log та alert. Вкладка Console в Chrome Devtools.
 */

/*
 * Змінні: оголошення з let та const.
 */

/*
 * Отримання даних: prompt та confirm.
 */

/*
 * Математичні оператори (+, -, *, /, %, **)
 */

/*
 * Number, Number.parseInt(), Number.parseFloat()
 */

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 
 */

/*
 * Конкатенація рядків, шаблонні рядки
 */

/*
 * Властивості і методи рядків
str.length
str.toLowerCase()
str.includes()
str.indexOf()
str.replace()
str.replaceAll()
str.slice()

 */

/*
 * Логічні оператори (&& || !)
 */

//* && - запинається на брехні
//* Якщо операнд був преведенний до false, то повертається значення цього операнду.
//* Якщо всі операнди були приведені до true, то повертається значення останнього операнду.

//* || - запинається на правді
//* Якщо операнд був преведенний до true, то повертається значення цього операнду.
//* Якщо всі операнди були приведені до false, то повертається останній.

//* ! - інвертує правду до брехні, а брехню до правди

//? Логічні оператори
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);

//? Приведення типів
// console.log(2 + 5 + '' + 1 + 0);
// console.log('' + 1 - 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' * '3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' - 2);
// console.log(7 / 0);
// console.log('  -9  ' + 5);
// console.log(null + 1);

/*
 * Результатом порівняння буде бульове значення.
 * Рядки порівнюються по unicode.
 * При порівнянні рядків рядки порівнюються посимвольно.
 * При порівнянні різних типів, операнди приводяться до числа.
 * null не дорівнює нічому окрім себе та undefined.
 * undefined не дорівнює нічому окрім себе та null.
 */

/*
 * Приведення різних типів до числа:
 * true --> 1
 * false --> 0
 * '' --> 0
 * null --> 0
 * undefined --> 0
 */

//* Оператор менше (<)
// console.log(2 < 12); true
// console.log(12 < 2); false
// console.log('a' < 'b');
// console.log('b' < 'a');
// console.log('A' < 'a');
// console.log('apple' < 'bananana');
// console.log('bananana' < 'apple');
// console.log(true < false);
// console.log(false < true);

//* Оператор більше (>)
// console.log(10 > 20);
// console.log(20 > 10);

//* Оператор менше або дорівнює (<=)
// console.log(6 <= 6);
// console.log(5 <= 5);
// console.log(5 <= 4);

//* Оператор більше або дорівнює (>=)
// console.log(5 >= 3);
// console.log(5 >= 5);
// console.log(3 >= 4);

//* Рівність (==)
// console.log('123' == 123);
// console.log(true == '1');
// console.log(4 == 5);

//* Строга рівність (===)
// console.log('123' === 123);
// console.log(null === null);
// console.log(2 + 2 === 4);
// console.log(0 === -0);

//* Нерівність (!=)
// console.log('4' != 4);

//* Строга нерівність (!==)
// console.log(4 !== 4);
