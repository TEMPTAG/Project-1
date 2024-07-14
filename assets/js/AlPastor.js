const timer10 = document.querySelector("#timer10")

let timer10value = 120;
function timerC10() {
if (this.textContent === "2 Min Timer"){
let interval = setInterval(function() {
    if (timer10value > 0) {
    timer10value-=1;
    let minute = Math.floor(timer10value / 60);
    let seconds = timer10value % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer10.textContent =  `${minute}:${seconds}`;
} else{
    clearInterval(interval);
}
 }, 1000)
}
}
timer10.addEventListener("click", timerC10);