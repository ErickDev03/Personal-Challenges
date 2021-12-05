const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const message = document.getElementById('message');
const containerTime = document.getElementById('container-time');

let countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

let x = setInterval(function() {
    let dateNow = new Date().getTime();
    let distance = countDownDate - dateNow;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    day.innerText = days;
    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = seconds;

    days < 10? day.innerText = `0${days}` : day.innerText = days;
    hours < 10 ? hour.innerText = `0${hours}`: hour.innerText = hours;
    minutes < 10 ? minute.innerText = `0${minutes}`: minute.innerText = minutes;
    seconds < 10 ? second.innerText = `0${seconds}`: second.innerText = seconds;


    message.style.display = "none";

    if (distance < 0) {
        message.style.display = "block";
        message.classList.add('message');
        containerTime.remove();
        clearInterval(x);
    }
}, 1000);


