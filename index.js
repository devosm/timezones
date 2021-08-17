let currentTime = Date()
let timeEl = document.getElementById("time-el")
let refresh = 1000
console.log(currentTime)

function displayTime(){
    timeEl.textContent = currentTime
}

setInterval(displayTime(),1000)
