setTimeout(() => {
    console.log("Hacking wifi...Please wait....")
}, 1000);

try{
    console.log(Rahul);
}
catch(err){
    console.log("Balle balle" + err);
}

// try{                             // This try catch block will not work because we scheduled the code execution
//     setTimeout(() => {           // By using setTimeout()
//         console.log(Rahul);
//     }, 100);
// }
// catch(err){
//     console.log("Balle balle" + err);
// }

setTimeout(() => {
    console.log("Fetching username and password...Please wait...")
}, 2000);

setTimeout(() => {
    console.log("Hacking Rahul's facebook id...Please wait...")
}, 3000);

setTimeout(() => {
    console.log("Username and password of Rahul (+913453464534) fetched...Please wait...")
}, 4000);
