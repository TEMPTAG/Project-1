const timer1 = document.querySelector("#timer1")

let timer1value = 3600;
function timerC1() {
if (this.textContent === "1 Hour Timer"){
let interval = setInterval(function() {
    if (timer1value > 0) {
    timer1value-=1;
    let minute = Math.floor(timer1value / 60);
    let seconds = timer1value % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer1.textContent =  `${minute}:${seconds}`;
} else{
    clearInterval(interval);
}
 }, 1000)
}
}
timer1.addEventListener("click", timerC1);




const timer2 = document.querySelector("#timer2")

let timer2value = 120;
function timerC2() {
if (this.textContent === "2 Min Timer"){
let interval = setInterval(function() {
    if (timer2value > 0) {
    timer2value-=1;
    let minute = Math.floor(timer2value / 60);
    let seconds = timer2value % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer2.textContent =  `${minute}:${seconds}`;
} else{
    clearInterval(interval);
}
 }, 1000)
}
}
timer2.addEventListener("click", timerC2);



const timer3 = document.querySelector("#timer3")

let timer3value = 600;
function timerC3() {
if (this.textContent === "10 Min Timer"){
let interval = setInterval(function() {
    if (timer3value > 0) {
    timer3value-=1;
    let minute = Math.floor(timer3value / 60);
    let seconds = timer3value % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer3.textContent =  `${minute}:${seconds}`;
} else{
    clearInterval(interval);
}
 }, 1000)
}
}
timer3.addEventListener("click", timerC3);



