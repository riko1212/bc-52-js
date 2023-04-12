'use strict';

console.log('this: ', this);

const fn = function () {
  console.log(this);
};

const fnA = () => {
  console.log(this);
};

fn();

fnA();

/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */
const user = {
  firstName: 'Oleksii',
  age: 40,
};

// https://uk.javascript.info/article/native-prototypes/native-prototypes-classes.svg

//* Власні та не власні властивості об'єкта

//* Перевірка власних властивостей obj.hasOwnProperty()
