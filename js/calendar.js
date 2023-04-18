const calendarEl = document.querySelector('.js-calendar');

let prevEl = null;

const onCalendarClick = (event) => {
  const { target, currentTarget } = event;

  // console.log('currentTarget', currentTarget);

  if (target.nodeName !== 'TD' || target.textContent === '') {
    // if (target.nodeName !== 'TD' || target.classList.contains('void')) {
    return;
  }

  if (prevEl === target) {
    target.classList.toggle('active');
    return;
  }

  if (prevEl !== null) {
    prevEl.classList.remove('active');
  }

  target.classList.add('active');
  prevEl = target;

  console.log('prev', prevEl);
};

calendarEl.addEventListener('click', onCalendarClick);
