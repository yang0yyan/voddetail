export class UserInfiBean {
  constructor() {
    this.password = "";
    this.username = "";
  }

  setPassword(password) {
    this.password = password;
  }
  getPassword() {
    return this.password;
  }
  setUsername(username) {
    this.username = username;
  }
  getUsername() {
    return this.username;
  }
}
