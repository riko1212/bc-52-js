const accordionBtnsEl = document.querySelectorAll('.js-accordion-btn');

const onAccordionBtnClick = (event) => {
  const { target } = event;
  accordionBtnsEl.forEach((el) => {
    el.nextElementSibling.classList.remove('active');
  });
  target.nextElementSibling.classList.toggle('active');
};

accordionBtnsEl.forEach((el, idx, arr) => {
  el.addEventListener('click', onAccordionBtnClick);
});
