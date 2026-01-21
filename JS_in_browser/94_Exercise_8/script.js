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

/* 
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

*/

const timeDisplay = document.getElementById("time");
const alarmInput = document.getElementById("alarmTime");
const setBtn = document.getElementById("setAlarm");
const clearBtn = document.getElementById("clearAlarm");
const status = document.getElementById("status");
const alarmSound = document.getElementById("alarmSound");

let alarmTime = null;
let alarmActive = false;

function updateTime() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    const current = `${h}:${m}:${s}`;
    timeDisplay.textContent = current;

    if (alarmActive && alarmTime === `${h}:${m}`) {
        alarmSound.play();
        status.textContent = "Alarm ringing!";
        alarmActive = false; // prevent repeat
    }
}

setBtn.addEventListener("click", () => {
    if (!alarmInput.value) return;
    alarmTime = alarmInput.value; // format: HH:MM
    alarmActive = true;
    status.textContent = `Alarm set for ${alarmTime}`;
});

clearBtn.addEventListener("click", () => {
    alarmActive = false;
    alarmTime = null;
    alarmSound.pause();
    alarmSound.currentTime = 0;
    status.textContent = "Alarm cleared";
});

setInterval(updateTime, 1000);
updateTime();