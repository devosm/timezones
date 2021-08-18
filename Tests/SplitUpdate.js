var currentTime = new Date()
let weekOfDayEl = document.getElementById("weekOfDay-el")
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
    hour = currentTime.getHours()
    if (hour.toString().length < 2){
        hour = "0" + hour
    }
    minute = currentTime.getMinutes()
    if (minute.toString().length < 2){
        minute = "0" + minute
    }
    second = currentTime.getSeconds()
    if (second.toString().length < 2){
        second = "0" + second
    }
    console.log(hour + ":" + minute + ":" + second)
}

function updateDay(){
    currentTime = new Date()
    year = currentTime.getFullYear()
    month = currentTime.getMonth() + 1
    day = currentTime.getDate()
    dayOfWeek = currentTime.getDay()
    displayDateAndTime()
}
//Function to display day of month

function displayDayOfMonth(){
    if(day === 1 || day === 21 || day == 31){
        dayOfMonth = day + "st"
    } else if(day === 2 || day === 22) {
        dayOfMonth = day + "nd"
    } else if(day === 3 || day === 23){
        dayOfMonth = day + "rd"
    } else{
        dayOfMonth = day + "th"
    }
    console.log(dayOfMonth + " of " + monthsArray[month - 1])
}

displayDayOfMonth()

//Output of time

function displayDateAndTime(){
    displayDayOfMonth()
    console.log("Date: " + day + "/" + month + "/" + year)
    console.log("Day of week: " + daysArray[dayOfWeek])
}

function displayUpdatedTime(){
    console.log("Time: " + hour + ":" + minute + ":" + second)
}

setInterval(updateTime, 1000)
setInterval(displayUpdatedTime, 1000)

if(hour === 0 && minute === 0){
    updateDay()
}