/*
 * Method(PUT/PATCH). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

const updateUserInfo = (userId, userInfo) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${BASE_URL}/users/${userId}`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

updateUserInfo(11, {
  name: 'Andrii Danylko',
  username: 'riko',
  email: 'test@email.com',
  address: {
    street: 'Victor Plains',
    suite: 'Suite 879',
    city: 'Lviv',
    zipcode: '90566-7771',
    geo: {
      lat: null,
      lng: null,
    },
  },
  phone: '(811) 572-9923',
  website: null,
  company: {
    name: 'Deckow-Crist',
    catchPhrase: 'Proactive didactic contingency',
    bs: 'synergize scalable supply-chains',
  },
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
