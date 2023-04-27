// https://openweathermap.org/current

import { fetchWether } from './weather-api';
import createWeatherCard from '../templates/weather-card.hbs';

const weatherFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.js-weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);
  // return `${date.getHours()} : ${date.getMinutes()}`;
  return `${new String(date.getHours()).padStart(2, 0)}:${new String(date.getMinutes()).padStart(
    2,
    0
  )}`;
};

const onWetherFormSubmit = event => {
  event.preventDefault();
  const weatherQuery = event.currentTarget.elements.user_city.value;

  fetchWether(weatherQuery)
    .then(data => {
      console.log(data);

      data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);
      data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);
      weatherWrapperEl.innerHTML = createWeatherCard(data);
    })
    .catch(err => {
      if (err.message === '404') {
        alert('Такого міста не знайдено');
        weatherWrapperEl.innerHTML = '';
      }
    })
    .finally(() => {
      event.target.reset();
    });
};

weatherFormEl.addEventListener('submit', onWetherFormSubmit);
