let currentTime = Date()
let timeEl = document.getElementById("time-el")
let refresh = 1000
console.log(currentTime)

function displayTime(){
    timeEl.textContent = currentTime
}

function refreshTime(){
    setInterval(displayTime(),1000)
}

refreshTime()