var currentTime = new Date()
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
    dayOfWeek = currentTime.getDay()
    console.log(hour + ":" + minute + ":" + second)
}

updateTime()
setInterval(updateTime, 1000)