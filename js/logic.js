/*
 * Логічні оператори (&& || !)
 */

//* && - запинається на брехні
//* Якщо операнд був преведенний до false, то повертається значення цього операнду.
//* Якщо всі операнди були приведені до true, то повертається значення останнього операнду.

// const result = 20 && 30 && 0 && 'Hello';

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
