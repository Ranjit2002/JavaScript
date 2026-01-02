/*
1 ==> Create a JavaScript class to create a complex number.
      Create a Constructor to set the real and the complex part.

2 ==> Write a method to add two complex numbers in the above class.

5 ==> Use getter and setters to set and get the real and imaginary parts of the complex number.
*/

class Complex{

    constructor(real, imaginary){
        this.real = real
        this.imaginary = imaginary
    }

    add(num){
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
    }

    get real(){
        return this._real
    }

    get imaginary(){
        return this._imaginary
    }
    
    set real(newReal){
        this._real = newReal 
    }

    set imaginary(newImaginary){
        this._imaginary = newImaginary
    }

}

let a = new Complex(2, 5);
console.log(a.real, a.imaginary)
a.real = 10
a.imaginary = 10
let b = new Complex(5, 7);
a.add(b)
console.log(`${a.real}+${a.imaginary}i`)

/*
3 ==> Create a class Student from a class Human. Override a method and see changes.

4 ==> See if Student is an instance of Human using instanceof keyword.
*/

class Human{
    
    constructor(name, favfood){
        this.name = name
        this.favfood = favfood
    }

    walk(){
        console.log(this.name + ": Human is walking")
    }

}

class Student extends Human{

    walk(){
        console.log(this.name + ": Student is walking")
    }

}

// let o = new Student("Ranjit", "Bhindi");
// o.walk();

// console.log(o instanceof Human)
