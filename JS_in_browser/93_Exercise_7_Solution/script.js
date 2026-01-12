class Password {

    constructor() {
        console.log("Welcome to password generator");
        this.Password = "";
        this.chars = "abcdefghijklmnopqrstuvwxyz";
        this.numbers = "1234567890";
        this.special = "!@#$%^&*()";
    }

    generatePassword(length) {
        if (length < 3) {
            console.log("Your password should be atleast 3 characters long");
        }
        else {
            let i = 0;
            while (i < length) {
                this.Password += this.chars[Math.floor(Math.random() * this.chars.length)];
                this.Password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
                this.Password += this.special[Math.floor(Math.random() * this.special.length)];
                i += 3
            }
            this.Password = this.Password.substring(0, length);
            // return this.Password;
            console.log(this.Password);
        }
    }
}

let p = new Password();

// console.log(p.generatePassword(16))
p.generatePassword(15);
