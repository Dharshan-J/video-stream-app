class User {
  constructor(name, mail, password) {
    this._name = name;
    this._mail = mail;
    this._password = password;
    this._wishlist = [];
  }

  get wishlist() {
    return this._wishlist;
  }

  set wishlist(list) {
    this._wishlist = list;
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

  addToWishList(movie) {
    this._wishlist.push(movie);
  }
}

module.exports = User;
