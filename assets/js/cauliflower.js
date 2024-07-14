const timer4 = document.querySelector("#timer4")

let timer4value = 1200;
function timerC4() {
if (this.textContent === "20 Min Timer"){
let interval = setInterval(function() {
    if (timer4value > 0) {
    timer4value-=1;
    let minute = Math.floor(timer4value / 60);
    let seconds = timer4value % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer4.textContent =  `${minute}:${seconds}`;
} else{
    clearInterval(interval);
}
 }, 1000)
}
}
timer4.addEventListener("click", timerC4);



const timer5 = document.querySelector("#timer5")

let timer5value = 480;
function timerC5() {
if (this.textContent === "8 Min Timer"){
let interval = setInterval(function() {
    if (timer5value > 0) {
    timer5value-=1;
    let minute = Math.floor(timer5value / 60);
    let seconds = timer5value % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer5.textContent =  `${minute}:${seconds}`;
} else{
    clearInterval(interval);
}
 }, 1000)
}
}
timer5.addEventListener("click", timerC5);
