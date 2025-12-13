/*
1 -->   Write a program to load a JavaScript file in a browser using Promises.
        Use .then() to display an alert when the laod is complete.
*/

const loadscript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(src + " Loaded Successfully");
        }
        document.head.append(script);
    })
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
// .then((src)=>{
//     console.log(src);
// })

    

/*
2 -->   Write the same program form previous question and use async\await syntax.
*/

const loadscript1 = async (src) => {
    return new Promise((resolove, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolove(src + " Loaded Successfully");
        }
        document.head.append(script);
    })
}

const main2 = async () => {
    console.log(new Date().getMilliseconds());
    let a = await loadscript1("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js");
    console.log(a);
    console.log(new Date().getMilliseconds());
}

// main2();



/*
3 -->   Creat a promise which rejects after 3 seconds. Use an async/await to get its value 
        use a try catch to handle its error.
*/

let p = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("This is not acceptable"))
        }, 3000);
    })
}

let a = async () =>{
    try{
        let c = await p();
        console.log(c);
    }
    catch(error){
        console.log("This error has been handled")
    }
}

// a();



/*
4 -->   Write a program using Promise.all() inside an async\await to await 3 promises.
        Compare its results with the case where we await these promises one by one.
*/

let p1 = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(10);
        }, 2000);
    })
}

let p2 = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(20);
        }, 1000);
    })
}

let p3 = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(30);
        }, 3000);
    })
}

const run = async () =>{
    console.time("run");
    // let a1 = await p1();     // Fetch first 10 products from the database
    // let a2 = await p2();     // Fetch another 10 products from the database
    // let a3 = await p3();     // Fetch yet another products from the database

    let a1 = p1();     // Fetch first 10 products from the database
    let a2 = p2();     // Fetch another 10 products from the database
    let a3 = p3();     // Fetch yet another products from the database

    let a1a2a3 = await Promise.all([a1, a2, a3]);  
    console.log(a1a2a3);
    console.timeEnd("run");
}

run();