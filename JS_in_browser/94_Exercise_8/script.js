/*
The HTML AudioElement Interface can be used to play audio in the browser
Create an alarm clock which display time and plays sound at a user specified time
 */

// function play() {
//     let audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
//     audio.play();
// }

// setTimeout(() => {
//     play();
// }, 2000);

const clock = document.getElementsByClassName("clock")[0];
const alarm = document.getElementsByClassName("alarm")[0];
const alarmInput = document.getElementById("alarmInput");

const time = () => {

    let date = new Date();
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');

    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hours format
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours.toString().padStart(2, '0');

    clock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`
}

setInterval(time, 1000);


const setAlarm = () => {

}