// const sayHello = () => console.log("Hello");

// const sayHello = name => console.log("Hello " + name);

// const sayHello = (name, greeting) => console.log(greeting + " " + name);


const sayHello = name => {
    console.log("greeting " + name);
    console.log("hi");
}

sayHello("Ranjit");

// sayHello("Ranjit", "Good Afternoon");

// const x = {
//     name: "Ranjit",
//     role: "JS Devleoper",
//     exp: 30,
//     show: function(){
//         console.log(`The name is ${this.name}\nThe role is ${this.role}\nHave experience of ${this.exp} years`);
//     }
// }

// const x = {
//     name: "Ranjit",
//     role: "JS Devleoper",
//     exp: 30,
//     show: function () {
//         let that = this
//         // console.log(this)
//         setTimeout(function () {
//             console.log(`The name is ${that.name}\nThe role is ${that.role}\nHave experience of ${that.exp} years`);
//         }, 2000);
//     }
// }

const x = {
    name: "Ranjit",
    role: "JS Devleoper",
    exp: 30,
    show: function () {
        setTimeout(() => {
            console.log(`The name is ${this.name}\nThe role is ${this.role}\nHave experience of ${this.exp} years`);
        }, 2000);
    }
}

// console.log(x.name, x.exp);
x.show();