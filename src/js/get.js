/*
 * Method (GET).
 */

import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

axios
  .get(`${BASE_URL}/user`)
  .then(response => {
    const { data } = response;
    console.log(data);
  })
  .catch(err => {
    console.log(err.code);
  });

// fetch(`${BASE_URL}/users`, { method: 'GET' })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
