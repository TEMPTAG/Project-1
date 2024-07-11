const timer1 = document.querySelector("#timer1")

let timer1value = 3600
function timerC1() {
if (this.textContent==="Timer"){

setInterval(function(){
timer1value-=1
timer1.textContent = timer1value
},1000)
}
}
timer1.addEventListener("click", timerC1)








const timer2 = document.querySelector("#timer2")

let timer2value = 120
function timerC2() {
if (this.textContent==="Timer"){

setInterval(function(){
timer2value-=1
timer2.textContent = timer2value
},1000)
}
}
timer2.addEventListener("click", timerC2)



const timer3 = document.querySelector("#timer3")

let timer3value = 600
function timerC3() {
if (this.textContent==="Timer"){

setInterval(function(){
timer3value-=1
timer3.textContent = timer3value
},1000)
}
}
timer3.addEventListener("click", timerC3)


