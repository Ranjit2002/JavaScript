/*

Write a JavaScript program to pretend to look like a hacker.
Write an async function which will simply display the following output.

Initializing hack program...

Hacking Ashish's username...

Connecting to facebook...

Try to use HTML and styling if possible.    

 */


// Method - 1

/*

const delay = (message, time) =>
    new Promise(resolve => setTimeout(() => resolve(message), time));

const run = async () => {
    console.log(await delay("Initializing hack program", 2000));
    console.log(await delay("Hacking Ashish's username and password...", 4000));
    console.log(await delay("Connecting to facebook...", 3000));
};

run();

*/


// Method - 2 

let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Initializing hack program")
    }, 2000);
})

.then((value)=>{
    console.log(value);
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
        resolve("Hacking Ashish's username and password...")
        }, 3000);
    })
})

.then((value)=>{
    console.log(value);
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
        resolve("Connecting to facebook...")
        }, 2000);
    })
})

.then((value)=>{
    console.log(value);
})

