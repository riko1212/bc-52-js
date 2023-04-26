import heroesDb from '../json/heroes.json';
import createHeroeCard from '../templates/heroes.hbs';

const heroesListEl = document.querySelector('.js-heroes-list');

const heroesArr = createHeroeCard(heroesDb);

heroesListEl.innerHTML = heroesArr;

// import Handlebars from 'handlebars';

// const template = Handlebars.compile('<p>Name: {{age}}</p>');

// console.log(template({ age: 40 }));

// const createHeroesCard = heroes => {
//   let {
//     images: { lg: url },
//     name,
//     appearance: { gender },
//     biography: { alterEgos },
//   } = heroes;
//   if (alterEgos === null) {
//     alterEgos = '-';
//   }
//   return `
//     <li class="heroes__item">
//     <img src="${url}" alt="${name}" class="heroes__picture">
//     <div class="heroes__content">
//         <h2 class="heroes__name">${name}</h2>
//         <ul class="heroes__biography list">
//             <li class="heroes__biography-item"><p class="heroes__gender"><strong>Gender: </strong> ${gender}</p></li>
//             <li class="heroes__biography-item"><p class="heroes__alter-egos"><strong>Alter Egos: </strong> ${alterEgos}</p></li>
//         </ul>
//     </div>
// </li>`;
// };

// const heroesArr = heroesDb.map(el => {
//   return createHeroeCard(el);
// });

// heroesListEl.innerHTML = heroesArr.join('');
