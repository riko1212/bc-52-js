/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Геттери та сеттери
 * Статичні властивості та методи
 */

class User {
  #userLogin;
  constructor(userInfo) {
    const {
      firstName,
      lastName,
      age,
      phoneNumber,
      login,
      password,
      nikName = 'anonimus',
    } = userInfo;

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.#userLogin = login;
    this.password = password;
    this.nikName = nikName;
  }

  changeFirstName(newName) {
    this.firstName = newName;
  }

  get login() {
    return this.#userLogin;
  }

  set login(newLogin) {
    this.#userLogin = newLogin;
  }
}

const user1 = new User({
  firstName: 'Edward',
  lastName: 'Smith',
  age: 30,
  phoneNumber: '(096) 58-05-459',
  login: 'id@si.pg',
  password: '123456',
});

const user2 = new User({
  firstName: 'Michael',
  lastName: 'Gill',
  age: 20,
  login: 'cu@hecekalo.edu',
  phoneNumber: '(097) 60-62-231',
  password: 'qwerty123',
});

const user3 = new User({
  firstName: 'Michael',
  lastName: 'Gill',
  age: 20,
  login: 'cu@hecekalo.edu',
  phoneNumber: '(097) 60-62-231',
  password: 'qwerty123',
  nikName: 'riko',
});

user1.firstName = 'Mykola';
user1.login = 'test@.edu';

// user1.setLogin('test@.edu');
// console.log(user1.getLogin());

console.log(user1);
console.log(user2);
console.log(user3);
