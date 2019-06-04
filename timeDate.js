function timeDate() {
    var currentTime = new Date();
    
    var day;
    switch (currentTime.getDay()) {
        case 0: day = "Sunday"; break;
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday";
    }
    var dd;
    switch (currentTime.getDay()) {
        case 1: dd = currentTime.getDay() + "st"; break;
        case 2: dd = currentTime.getDay() + "nd"; break;
        case 3: dd = currentTime.getDay() + "rd"; break;
        default: dd = currentTime.getDay() + "th"; break;
    }
    var mm;
    switch (currentTime.getMonth()) {
        case 0: mm = "January"; break;
        case 1: mm = "February"; break;
        case 2: mm = "March"; break;
        case 3: mm = "April"; break;
        case 4: mm = "May"; break;
        case 5: mm = "June"; break;
        case 6: mm = "July"; break;
        case 7: mm = "August"; break;
        case 8: mm = "September"; break;
        case 9: mm = "October"; break;
        case 10: mm = "November"; break;
        case 11: mm = "December";
    }
    var yyyy = currentTime.getFullYear();
    var fullDate = day +" "+ dd +" "+ mm +" "+ yyyy;

    var h = currentTime.getHours();
    h = (h < 10 ? "0" : "") + h;
    var m = currentTime.getMinutes();
    m = (m < 10 ? "0" : "") + m;
    var s = currentTime.getSeconds();
    s = (s < 10 ? "0" : "") + s;
    var fullTime = h +":"+ m +":"+ s;

    var currentTimeString = fullDate +" "+ fullTime ;
    $("#timeDate").html(currentTimeString);
}

$(document).ready(function () {
        setInterval(timeDate, 1000);
    }
);