/*
 * Наслідування з extends та super
 */

class User {
  #login;
  #email;
  constructor({ firstName, lastName, age, login, email }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.#login = login;
    this.#email = email;
  }
  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  getFullName() {
    return `${User.trimStr(this.firstName)} ${User.trimStr(this.lastName)}`;
  }

  static trimStr(str) {
    return str.trim();
  }
}

class Developer extends User {
  constructor(devInfo) {
    const { countOfProjects, ...otherProps } = devInfo;
    super(otherProps);
    // this = {}
    this.countOfProjects = countOfProjects;

    // return this;
  }
  doDeveloperWork() {
    console.log('Роблю роботу');
  }
}

class Manager {
  constructor() {
    const { managerProp, ...otherProps } = devInfo;
    // this = {}
    this.managerProp = managerProp;

    // return this;
  }
  doManaerWork() {
    console.log('Роблю роботу');
  }
}

// const dev = new Developer();

const someDeveloper = new Developer({
  countOfProjects: 10,
  firstName: 'Nicholas',
  lastName: 'West',
  age: 30,
  login: 'vcvd',
  email: 'iseegi@sak.sx',
});

console.log(someDeveloper.getFullName());

// console.log(user);

// const someManager = new Manager({
//   managerProp: 343,
//   firstName: 'Caleb',
//   lastName: 'Murray',
//   age: 20,
//   login: 'bgff',
//   email: 'uwigicnaf@ra.be',
// });

// console.log(someManager);
