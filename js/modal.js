const modalOpenBtnEl = document.querySelector('.js-modal-open');
const modalCloseBtnEl = document.querySelector('.js-modal-close');
const backdropEl = document.querySelector('.js-backdrop');

// const toggleModal = () => {
//   backdropEl.classList.toggle('is-open');
//   if (!backdropEl.classList.contains('is-open')) {
//     document.removeEventListener('keydown', onEscBtnClick);
//   }
// };

const toggleModal = () => {
  backdropEl.classList.toggle('is-open');
};

const onEscBtnClick = (e) => {
  if (e.code === 'Escape' && backdropEl.classList.contains('is-open')) {
    console.log(e.code);
    toggleModal();
    document.removeEventListener('keydown', onEscBtnClick);
  }
};

const onModalOpenBtnClick = (e) => {
  toggleModal();
  document.addEventListener('keydown', onEscBtnClick);
};

modalOpenBtnEl.addEventListener('click', onModalOpenBtnClick);
modalCloseBtnEl.addEventListener('click', toggleModal);
