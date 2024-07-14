const timer6 = document.querySelector("#timer6")

let timer6value = 86400;
function timerC6() {
if (this.textContent === "24 Hour Timer"){
let interval = setInterval(function() {
    if (timer6value > 0) {
    timer6value-=1;
    let hours = Math.floor(timer6value / 3600);
    let minutes = Math.floor(( timer6value % 3600) /60);
    let seconds = timer6value % 60;

    minutes= minutes <10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer6.textContent =  `${hours}:${minutes}:${seconds}`;
} else{
    clearInterval(interval);
}
 }, 1000)
}
}
timer6.addEventListener("click", timerC6);


const timer7 = document.querySelector("#timer7")

let timer7value = 600;
function timerC7() {
if (this.textContent === "10 Min Timer"){
let interval = setInterval(function() {
    if (timer7value > 0) {
    timer7value-=1;
    let minute = Math.floor(timer7value / 60);
    let seconds = timer7value % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer7.textContent =  `${minute}:${seconds}`;
} else{
    clearInterval(interval);
}
 }, 1000)
}
}
timer7.addEventListener("click", timerC7);