const timer10 = document.querySelector("#timer10");

let timer10value = 120;
function timerC10() {
  if (this.textContent === "2 Min Timer") {
    let interval = setInterval(function () {
      if (timer10value > 0) {
        timer10value -= 1;
        let minute = Math.floor(timer10value / 60);
        let seconds = timer10value % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;
        timer10.textContent = `${minute}:${seconds}`;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }
}
timer10.addEventListener("click", timerC10);

const timer11 = document.querySelector("#timer11");

let timer11value = 86400;
function timerC11() {
  if (this.textContent === "24 Hour Timer") {
    let interval = setInterval(function () {
      if (timer11value > 0) {
        timer11value -= 1;
        let hours = Math.floor(timer11value / 3600);
        let minutes = Math.floor((timer11value % 3600) / 60);
        let seconds = timer11value % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timer11.textContent = `${hours}:${minutes}:${seconds}`;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }
}
timer11.addEventListener("click", timerC11);

const timer12 = document.querySelector("#timer12");

let timer12value = 600;
function timerC12() {
  if (this.textContent === "10 Min Timer") {
    let interval = setInterval(function () {
      if (timer12value > 0) {
        timer12value -= 1;
        let minute = Math.floor(timer12value / 60);
        let seconds = timer12value % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;
        timer12.textContent = `${minute}:${seconds}`;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }
}
timer12.addEventListener("click", timerC12);
