const daysEl =document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minEl=document.getElementById("min");
const secEl=document.getElementById("sec");

const newYear = "25 dec 2021";

function countdown(){
    const newYearDate= new Date(newYear);
    const currentDate= new Date();

    const totalSeconds = (newYearDate - currentDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;

    daysEl.innerHTML= days;
    hoursEl.innerHTML= formatTime(hours);
    minEl.innerHTML= formatTime(minutes);
    secEl.innerHTML= formatTime(seconds);
}

function formatTime(time){
    return time<10 ? `0${time}`:time;
}
countdown();

setInterval(countdown,1000);