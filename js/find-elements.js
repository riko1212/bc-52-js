//* Об'єкти window і document

// alert('dawdasd');

// console.dir(window);

//* Дідівські методи пошуку елементів (getElementBy...)

// const titleEl = document.getElementsByClassName('main-title');
// const listItemEl = document.getElementsByTagName('li');

// console.log(listItemEl);

// titleEl.textContent = 'New Title';

//* Сучасні методи пошуку елементів (querySelector, querySelectorAll)

// const titleEl = document.querySelector('.container > #title');

// console.log(titleEl);
//* Навігації по DOM дереву

const listEl = document.querySelector('.js-list');

console.log(listEl);
