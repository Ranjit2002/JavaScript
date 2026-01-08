message = "Good Global";

// function hello1() {
//     let message = "Good Morning";
//     {
//         let message = "Good Afternoon";
//         console.log("Hello 1: " + message);
//     }
//      console.log(message);
//     let c = function hello2() {
//         console.log("I am c: " + message);
//     }
//     return c;
// }

/*
function hello1() {
    let message = "Good Morning";
        // let message = "Good Afternoon";
        console.log("Hello 1: " + message);

        let c = function hello2() {
        console.log("I am c: " + message);
    }
    return c;
}

let c = hello1()
c();


function init(){
    var name = "Mozilla";   // name is a global variable created by init
    function displayName(){
        // displayName() is the inner function, a closure
        console.log(name);
    }
    name = "Ranjit"
    return displayName;
}

let c = init();
c()
*/

function returnFunc() {

    const x = () => {
        let a = 1;
        console.log(a);
        const y = () => {
            // let a = 2;
            console.log(a);
            const z = () => {
                // let a = 3;
                console.log(a);
            }
            z();
        }
        a = 999;
        y();
    } 
    return x;
}

let a = returnFunc();
a(); 