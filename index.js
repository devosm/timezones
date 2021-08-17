var currentTime = new Date()
let weekOfDayEl = document.getElementById("weekOfDay-el")
let refresh = 1000
let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//Time variables
var year = currentTime.getFullYear()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var hour = currentTime.getHours()
var minute = currentTime.getMinutes()
var second = currentTime.getSeconds()
var dayOfWeek = currentTime.getDay()
var dayOfMonth = 0


//Update variables
function updateTime(){
    currentTime = new Date()
    year = currentTime.getFullYear()
    month = currentTime.getMonth() + 1
    day = currentTime.getDate()
    hour = currentTime.getHours()
    minute = currentTime.getMinutes()
    second = currentTime.getSeconds()
    dayOfWeek = currentTime.getDay()
    dayOfMonth = 0
}

//For testing purposes
console.log("Date: " + day + "/" + month + "/" + year)

//Day of week

console.log("Day of week: " + daysArray[dayOfWeek])

//Day of Month

function displayWeekday(){
    if(day === 1 || day === 21 || day == 31){
        dayOfMonth = day + "st"
    } else if(day === 2){
        dayOfMonth = day + "nd"
    } else if(day === 3){
        dayOfMonth = day + "rd"
    } else{
        dayOfMonth = day + "th"
    }
    console.log(dayOfMonth + " of " + monthsArray[month - 1])
}

displayWeekday()

function displayTime(){
    console.log(currentTime)
    console.log("Date: " + day + "/" + month + "/" + year)
    console.log(hour + ":" + minute + ":" + second)
}

setInterval(updateTime, refresh)
setInterval(displayTime, refresh)

//Time
