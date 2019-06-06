function timeDate() {
    var sysTime = new Date();

    var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dd;
    switch (sysTime.getDate()) {
        case 1: dd = sysTime.getDate() + "st"; break;
        case 2: dd = sysTime.getDate() + "nd"; break;
        case 3: dd = sysTime.getDate() + "rd"; break;
        default: dd = sysTime.getDate() + "th"; break;
    }
    var mm = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var yyyy = sysTime.getFullYear();

    var fullDate = day[sysTime.getDay()] +" "+ dd +" "+ mm[sysTime.getMonth()] +" "+ yyyy + "</br>";

    var h = sysTime.getHours();
    h = (h < 10 ? "0" : "") + h;
    var m = sysTime.getMinutes();
    m = (m < 10 ? "0" : "") + m;
    var s = sysTime.getSeconds();
    s = (s < 10 ? "0" : "") + s;
    
    var fullTime = h +":"+ m +":"+ s;

    var sysTimeString = fullDate +" "+ fullTime ;
    $("#timeDate").html(sysTimeString);
}

$(document).ready(function () {
        setInterval(timeDate, 1000);
    }
);
