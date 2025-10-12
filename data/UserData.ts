import { faker } from "@faker-js/faker";

export class UserData {
  static generateUsername() {
    return faker.internet
      .username()
      .replace(/[^a-zA-Z]/g, "")
      .toLowerCase();
  }

  static generateEmail() {
    return faker.internet.email().toLowerCase();
  }

  static generatePassword() {
    return faker.internet.password();
  }
}
