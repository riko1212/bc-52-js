/*
 * Події елементів форм. focus, blur, change, input, submit
 */

const inputEl = document.querySelector('.js-username-input');
const userEl = document.querySelector('.js-username-output');
const checkEl = document.querySelector('.js-policy-checkbox');
const sendBtnEl = document.querySelector('.js-contact-form-submit');

const contactFormEl = document.querySelector('.js-contact-form');

// inputEl.addEventListener('focus', (event) => {
//   event.target.style.outline = '2px solid teal';
// });

// inputEl.addEventListener('blur', (event) => {
//   event.target.style.outline = 'none';
// });

// inputEl.addEventListener('change', (event) => {
//   console.dir(event.target.value);
// });

// inputEl.addEventListener('input', (event) => {
//   if (event.target.value === '') {
//     userEl.textContent = 'користувач';
//     return;
//   }
//   userEl.textContent = event.target.value;
// });

checkEl.addEventListener('change', (event) => {
  if (event.target.checked && inputEl.value !== '') {
    sendBtnEl.disabled = false;
    return;
  }
  sendBtnEl.disabled = true;
});

inputEl.addEventListener('input', (event) => {
  if (checkEl.checked && event.target.value !== '') {
    console.log('fdsfs');
    sendBtnEl.disabled = false;
    return;
  }
  sendBtnEl.disabled = true;
});

contactFormEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submit');
  // inputEl.value = '';
  // checkEl.checked = false;
  event.target.reset();
});
