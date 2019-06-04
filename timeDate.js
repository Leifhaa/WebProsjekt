function timeDate() {
    var currentTime = new Date();
    
    var currentDay;
    switch (currentTime.getDay()) {
        case 0: currentDay = "Sunday"; break;
        case 1: currentDay = "Monday"; break;
        case 2: currentDay = "Tuesday"; break;
        case 3: currentDay = "Wednesday"; break;
        case 4: currentDay = "Thursday"; break;
        case 5: currentDay = "Friday"; break;
        case 6: currentDay = "Saturday";
    }
    
    var currentDate = currentTime.getDate();
    currentDate = (currentDate < 10 ? "0" : "") + currentDate;
    var currentMonth = currentTime.getMonth();
    currentMonth = (currentMonth < 10 ? "0" : "") + currentMonth;
    var currentYear = currentTime.getFullYear();
    var fullDate = currentDay +" "+ currentDate +"/"+ currentMonth +"/"+ currentYear;

    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    var currentSeconds = currentTime.getSeconds();
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    var fullTime = currentHours +":"+ currentMinutes +":"+ currentSeconds;

    var currentTimeString = fullDate +" "+ fullTime ;
    $("#timeDate").html(currentTimeString);
}

$(document).ready(function () {
        setInterval(timeDate, 1000);
    }
);