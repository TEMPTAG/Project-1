const timer8 = document.querySelector("#timer8")

let timer8value = 600;
function timerC8() {
if (this.textContent === "10 Min Timer"){
let interval = setInterval(function() {
    if (timer8value > 0) {
    timer8value-=1;
    let minute = Math.floor(timer8value / 60);
    let seconds = timer8value % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer8.textContent =  `${minute}:${seconds}`;
} else{
    clearInterval(interval);
}
 }, 1000)
}
}
timer8.addEventListener("click", timerC8);


const timer9 = document.querySelector("#timer9")

let timer9value = 12600;
function timerC9() {
if (this.textContent === "3 1/2 Hour Timer"){
let interval = setInterval(function() {
    if (timer9value > 0) {
    timer9value-=1;
    let hours = Math.floor(timer9value / 3600);
    let minutes = Math.floor(( timer9value % 3600) /60);
    let seconds = timer9value % 60;

    minutes= minutes <10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer9.textContent =  `${hours}:${minutes}:${seconds}`;
} else{
    clearInterval(interval);
}
 }, 1000)
}
}
timer9.addEventListener("click", timerC9);