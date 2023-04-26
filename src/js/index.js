// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!

// console.log('start');

// setTimeout(() => {
//   console.log('SetTimeout');
// }, 100);

// const promise = new Promise((resolve, reject) => {
//   console.log('In constructor Promise');

//   resolve('In then');
// });

// promise.then(data => {
//   setTimeout(() => {
//     console.log('timeout data', data);
//   }, 0);
//   console.log(data);
// });

// console.log('end');

const containerEl = document.querySelector('.js-counter');

// for (let i = 0; i <= 1000; i += 1) {
//   containerEl.innerHTML = i;
// }

let i = 0;

// const count = () => {
//   i += 10;
//   containerEl.innerHTML = i;
//   if (i != 1000) {
//     setTimeout(() => {
//       count();
//     }, 0);
//   }
// };

// const count = () => {
//   i += 10;
//   containerEl.innerHTML = i;

//   count();
// };

count();
