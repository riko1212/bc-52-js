//* Об'єкт style, cssText

const titleEl = document.querySelector('.js-sec-title');
console.log(titleEl);
// titleEl.style.backgroundColor = 'tomato';
// titleEl.style.fontSize = '50px';

// titleEl.style.cssText = 'background-color: tomato; color: teal;';

//* Методи об'єкту classList (add, remove, toggle, contains)

const backdropEl = document.querySelector('.js-backdrop');
const modalBtnEl = document.querySelector('.js-modal-btn');
const modalEl = document.querySelector('.modal');

modalBtnEl.addEventListener('click', () => {
  backdropEl.classList.add('is-backdrop-open');
});

modalEl.addEventListener('click', () => {
  backdropEl.classList.remove('is-backdrop-open');
});

// titleEl.classList.add('some-class');
// titleEl.classList.remove('section__title');
// titleEl.classList.toggle('section__title');
// console.log(titleEl.classList.contains('section__title'));
