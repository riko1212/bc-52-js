// const user = {
//   userName: 'Andrii',
//   userAge: 40,
//   children: ['Matviy', 'Marko'],
// };

// const obj = JSON.parse(JSON.stringify(user));

// console.log(obj);

// user.children.push('Anna');
// console.log(user);

// try {
//   const data = JSON.parse('Well, this is awkward');
// } catch (err) {
//   console.log('Error');
// }
// console.log("❌ You won't see this log");

// localStorage.setItem('name', 'Andrii');
// localStorage.setItem('age', '40');

// console.log(localStorage.getItem('name'));
// console.log(localStorage.getItem('age'));
// localStorage.setItem('name', '');

// console.log(localStorage.getItem('name'));

// console.log(`${localStorage.getItem('name')}: ${localStorage.getItem('age')}`);

const user = {
  userName: 'Andrii',
  userAge: 40,
  children: ['Matviy', 'Marko'],
  pass: 'qwerty',
};

localStorage.setItem('user', JSON.stringify(user));
localStorage.getItem('user');
console.log(JSON.parse(localStorage.getItem('user')));
console.log(window);
