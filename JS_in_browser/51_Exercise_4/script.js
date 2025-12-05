/*

Create a Digital seconds clock using SetInterval and Date object in JavaScript.
The date object can be used to get the date, time, hours and seconds which can be 
updated using setInterval.
Try to keep the UI good looking. 

*/

const updateClock =()=>{
    let a = new Date();
    let hours = a.getHours().toString();
    let minutes = a.getMinutes().toString().padStart(2, '0');
    let seconds = a.getSeconds().toString().padStart(2, '0');

     // AM/PM
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // if hour=0, print 12
    hours = hours.toString().padStart(2, '0');


    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds} ${ampm}`

    let day = a.getDate().toString().padStart(2, '0');
    let month = (a.getMonth() + 1).toString().padStart(2, '0'); // months start at 0
    let year = a.getFullYear();

    document.getElementById("date").innerText = `${day}:${month}:${year}`;

}

setInterval(updateClock, 1000);

updateClock()

