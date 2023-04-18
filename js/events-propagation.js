/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

const sectionEl = document.querySelector('.js-section');
const divEl = document.querySelector('.js-div');
const textEl = document.querySelector('.js-text');

sectionEl.addEventListener('click', (event) => {
  console.group('addEventListener on section');
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
  console.groupEnd('addEventListener on section');
});

divEl.addEventListener('click', (event) => {
  console.group('addEventListener on div');
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
  console.groupEnd('addEventListener on div');
});

textEl.addEventListener('click', (event) => {
  console.group('addEventListener on text');
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
  console.groupEnd('addEventListener on section');
});
