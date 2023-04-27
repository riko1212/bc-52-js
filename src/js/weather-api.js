'use strict';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'b63c33c5dbac71bec6a6b4df7fa19103';

export const fetchWether = weatherQuery => {
  const searchParams = new URLSearchParams({
    q: weatherQuery,
    lang: 'ua',
    units: 'metric',
    appid: API_KEY,
  });
  return fetch(`${BASE_URL}/weather?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
