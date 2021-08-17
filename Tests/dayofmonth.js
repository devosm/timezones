let currentTime = new Date()
let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//Time variables
let year = currentTime.getFullYear()
let month = currentTime.getMonth() + 1
let day = currentTime.getDate()
let hour = currentTime.getHours()
let minute = currentTime.getMinutes()
let second = currentTime.getSeconds()
let dayOfWeek = currentTime.getDay()
let dayOfMonth = 0

function setdayofmonth(){if (day === 1){
    dayOfMonth = day + "st"
} else if (day === 2){
    dayOfMonth = day + "nd"
} else if (day === 3){
    dayOfMonth = day + "rd"
} else if (day < 3 && day > 21){
    var dayOfMonth = day + "th"
} else if (day === 21){
    dayOfMonth = day + "st"
} else if (day === 22){
    dayOfMonth = day + "nd"
} else if (day < 22 && day > 31){
    dayOfMonth = day + "th"
} else  if (day === 31){
    dayOfMonth = day + "st"
}
}

function displayTime(){
    let currentTime = new Date()
    console.log("Today is " + daysArray[dayOfWeek] + " the " + dayOfMonth)
}

displayTime()