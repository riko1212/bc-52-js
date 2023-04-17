/*
 * Основи подій. Створення та видалення слухачів. Об'єкт події
 */

/*
 ?  - Найменування колбеків для слухачів
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

//  handleSwapBtnClick
// swapBtnClickHandler
//  onSwapBtnClick

const swapBtnEl = document.querySelector('.js-swap-btn');
const removeListenerBtnEl = document.querySelector('.js-remove-listener');
const imgEl = document.querySelector('.js-img');

const onSwapBtnClick = (e) => {
  console.log(e);
  imgEl.src = 'https://picsum.photos/200/300';
  imgEl.alt = 'random';
  e.target.style.backgroundColor = 'tomato';
};

swapBtnEl.addEventListener('click', onSwapBtnClick);

removeListenerBtnEl.addEventListener('click', (e) => {
  console.log('Hello');
  swapBtnEl.removeEventListener('click', onSwapBtnClick);
});

// https://picsum.photos/200/300
