const updateClock = () => {
    let a = new Date();
    let hours = a.getHours();
    let minutes = a.getMinutes();
    let seconds = a.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM"

    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds} ${ampm}`
}

setInterval(updateClock, 1000);

updateClock();