const palletEl = document.querySelector('.js-pallet');
const palletItemEl = document.querySelectorAll('.js-pallet>li');

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

const paintElements = () => {
  palletItemEl.forEach((element) => {
    const color = randomColor();

    element.style.backgroundColor = color;
    element.dataset.elementColor = color;
  });
};

paintElements();

const onPalletClick = (e) => {
  const { target, currentTarget } = e;

  if (target.nodeName !== 'LI') {
    return;
  }

  const palletItemColor = target.dataset.elementColor;
  const outputColorEl = target.querySelector('.js-pallet__item-color');
  // target.querySelector('.js-pallet__item-color') = target.dataset.elementColor
  outputColorEl.textContent = palletItemColor;
};

palletEl.addEventListener('click', onPalletClick);
