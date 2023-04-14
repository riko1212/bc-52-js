//* Атрибути в якості властивостей об'єкту

const imgEl = document.querySelector('.js-img');
const swapBtn = document.querySelector('.js-swap-image-btn');

// console.log(imgEl);

// imgEl.alt = 'dog';
// imgEl.src = 'https://picsum.photos/200/300';
// imgEl.ariaLabel = 'picture';

// const changeImg = () => {
//   imgEl.alt = 'dog';
//   imgEl.src = 'https://picsum.photos/200/300';
//   imgEl.ariaLabel = 'picture';
// };

// swapBtn.addEventListener('click', changeImg);

// https://picsum.photos/200/300

/*
 * Доступ до атрибутів
 * elem.hasAttribute(name)
 * elem.getAttribute(name)
 * elem.setAttribute(name, value)
 * elem.removeAttribute(name)
 * elem.attributes
 */

console.log((imgEl.alt = ''));
