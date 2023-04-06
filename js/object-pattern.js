const logFunction = function ({
  firstName,
  lastName,
  age,
  gender,
  userEmail,
  userPhoneNumber,
}) {
  console.log(firstName, lastName, age, gender, userEmail, userPhoneNumber);
};

logFunction({
  firstName: 'Amelia',
  lastName: 'Burgess',
  age: 30,
  gender: 'female',
  userEmail: 'apjez@eh.aq',
  userPhoneNumber: '(096) 35-21-476',
});

// const logName = function (name) {
//   console.log(name);
//   return name;
// };

// // logName('Andrii');

// console.log(logName('Andrii'));
