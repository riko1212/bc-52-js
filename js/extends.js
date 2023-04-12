/*
 * Наслідування з extends та super
 */
class Developer {
  #login;
  #email;

  constructor({
    countOfProjects,
    firstName,
    lastName,
    age,
    login,
    email,
  } = {}) {
    // this = {}
    this.countOfProjects = countOfProjects;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.#login = login;
    this.#email = email;
    // return this;
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

  #trimStr(str) {
    return str.trim();
  }

  doDeveloperWork() {
    console.log('Роблю роботу');
  }
}

class Manager {
  #login;
  #email;

  constructor({ managerProp, firstName, lastName, age, login, email } = {}) {
    // this = {}
    this.managerProp = managerProp;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.#login = login;
    this.#email = email;
    // return this;
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

  #trimStr(str) {
    return str.trim();
  }
  doManaerWork() {
    console.log('Роблю роботу');
  }
}

const user = new Developer({
  countOfProjects: 10,
  firstName: 'Nicholas',
  lastName: 'West',
  age: 30,
  login: 'vcvd',
  email: 'iseegi@sak.sx',
});

console.log(user);

const someManager = new Manager({
  managerProp: 343,
  firstName: 'Caleb',
  lastName: 'Murray',
  age: 20,
  login: 'bgff',
  email: 'uwigicnaf@ra.be',
});

console.log(someManager);
