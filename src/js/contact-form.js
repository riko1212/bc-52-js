import storageService from './localstorage';

const contactFormEl = document.querySelector('.js-contact-form');
const userInfo = {};

const fillFormFields = () => {
  const formDataFromLS = storageService.load('userInfo');
  for (const prop in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(prop)) {
      contactFormEl.elements[prop].value = formDataFromLS[prop];
    }
  }
};

fillFormFields();

const onFormChange = e => {
  const { target } = e;
  const fieldName = target.name;
  const fieldValue = target.value;
  userInfo[fieldName] = fieldValue;
  // localStorage.setItem('userInfo', JSON.stringify(userInfo));
  storageService.save('userInfo', userInfo);
};

const onFormSubmit = e => {
  e.preventDefault();

  // localStorage.removeItem('userInfo');
  storageService.remove('userInfo');
  contactFormEl.reset();
};

contactFormEl.addEventListener('change', onFormChange);
contactFormEl.addEventListener('submit', onFormSubmit);
