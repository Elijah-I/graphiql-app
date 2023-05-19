export class User {
  static login(email: string) {
    localStorage.setItem("activeUser", email);
  }

  static register(email: string, password: string) {
    localStorage.setItem(email, password);
  }

  static logout() {
    localStorage.setItem("activeUser", "");
  }

  static getActive() {
    return localStorage.getItem("activeUser") ?? "";
  }
}
