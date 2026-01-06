/*

Create a JavaScript program capable of generating a password.
Which contains atleast one lowercase, one uppercase and one special characters.
Create a password class to achieve the same.


class Password{
    this.password
    generateStrongPassword
    generateWeakPassword
    generateSuperStrongPassword
    generateFunnyPassword
}

*/


class Password {

  constructor() {
    this.Password = "";
  }

  shuffle(str) {
    return str
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  }

  generateStrongPassword(length = 8) {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special = "!@#$%^&*()_+[]{}<>?/";

    let pass =
      lower[Math.floor(Math.random() * lower.length)] +
      upper[Math.floor(Math.random() * upper.length)] +
      special[Math.floor(Math.random() * special.length)]

    const all = lower + upper + special;

    for (let i = pass.length; i < length; i++) {
      pass += all[Math.floor(Math.random() * all.length)]
    }

    this.Password = this.shuffle(pass);
    return this.Password;
  }

  generateWeakPassword(length = 5) {
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890"

    let pass = ""

    for (let i = 1; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)]
    }

    this.Password = pass;
    return this.Password;

  }

  generateSuperStrongPassword(length = 15) {
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const special = "!@#$%^&*()_+[]{}<>?/";
    const number = "1234567890"


    let pass = lower[Math.floor(Math.random() * lower.length)] +
      upper[Math.floor(Math.random() * upper.length)] +
      special[Math.floor(Math.random() * special.length)] +
      number[Math.floor(Math.random() * number.length)]

    const all = lower + upper + special + number;

    for (let i = pass.length; i < length; i++) {
      pass += all[Math.floor(Math.random() * pass.length)]
    }

    this.Password = this.shuffle(pass);
    return this.Password;
  }

  generateFunnyPassword() {

    const funnyPasswords = [
      "ILoveJS😂",
      "NoBugPls!",
      "404NotFound!",
      "Coffee>Sleep☕",
      "HackMeIfYouCan😎"
    ];

    let pass = ""

    this.Password = 
      funnyPasswords[Math.floor(Math.random() * funnyPasswords.length)];
    
    return this.Password;
  }

}

let p = new Password();

console.log("Weak Password:- ", p.generateWeakPassword())
console.log("Strong Password:- ", p.generateStrongPassword())
console.log("Super Strong Password:- ", p.generateSuperStrongPassword())
console.log("Funny Password:- ", p.generateFunnyPassword())


/*
class Password {
  constructor() {
    this.password = "";
  }

  // Helper method to shuffle characters
  shuffle(str) {
    return str
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  }

  generateStrongPassword(length = 8) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special = "!@#$%^&*()_+[]{}<>?/";

    let pass =
      lower[Math.floor(Math.random() * lower.length)] +
      upper[Math.floor(Math.random() * upper.length)] +
      special[Math.floor(Math.random() * special.length)];

    const all = lower + upper + special;

    for (let i = pass.length; i < length; i++) {
      pass += all[Math.floor(Math.random() * all.length)];
    }

    this.password = this.shuffle(pass);
    return this.password;
  }

  generateWeakPassword(length = 6) {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }

    this.password = pass;
    return this.password;
  }

  generateSuperStrongPassword(length = 12) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const special = "!@#$%^&*()_+[]{}<>?/";

    let pass =
      lower[Math.floor(Math.random() * lower.length)] +
      upper[Math.floor(Math.random() * upper.length)] +
      numbers[Math.floor(Math.random() * numbers.length)] +
      special[Math.floor(Math.random() * special.length)];

    const all = lower + upper + numbers + special;

    for (let i = pass.length; i < length; i++) {
      pass += all[Math.floor(Math.random() * all.length)];
    }

    this.password = this.shuffle(pass);
    return this.password;
  }

  generateFunnyPassword() {
    const funnyPasswords = [
      "ILoveJS😂",
      "NoBugPls!",
      "404NotFound!",
      "Coffee>Sleep☕",
      "HackMeIfYouCan😎"
    ];

    this.password =
      funnyPasswords[Math.floor(Math.random() * funnyPasswords.length)];
    return this.password;
  }
}

// Usage Example 
const pwd = new Password();

console.log("Weak:", pwd.generateWeakPassword());
console.log("Strong:", pwd.generateStrongPassword());
console.log("Super Strong:", pwd.generateSuperStrongPassword());
console.log("Funny:", pwd.generateFunnyPassword());

*/