class User {
  constructor(name, mail, password) {
    this._name = name;
    this._mail = mail;
    this._password = password;
  }

  get name() {
    return this._name;
  }

  get mail() {
    return this._mail;
  }

  get password() {
    return this._password;
  }

  set name(name) {
    this._name = name;
  }
  set mail(mail) {
    this._mail = mail;
  }
  set password(password) {
    this._password = password;
  }
}

module.exports = User;
