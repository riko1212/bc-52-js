const messagesListEl = document.querySelector('.js-messages-wrapper');

const onCloseBtnClick = (event) => {
  // console.log(event.target);
  // console.log(event.currentTarget);
  const { target } = event;
  if (target.nodeName !== 'BUTTON') {
    return;
  }
  const messageEl = target.closest('.message');
  messageEl.remove();
};

messagesListEl.addEventListener('click', onCloseBtnClick);
