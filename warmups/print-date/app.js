function currentDate() {
    var date = new Date();
    var day = 0;
    var hour = date.getHours();
    var amOrPm = "A.M.";
    var time = "";

    switch (date.getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    }
    if (hour === 12) {
        amOrPm = "P.M.";
    } else if (hour > 12) {
        amOrPm = "P.M.";
        hour -= 12;
    } else if (hour === 0) {
        hour = 12;
    }
    time = hour.toString() + ":" + date.getMinutes().toString() + ":" + date.getSeconds().toString() + " " + amOrPm;
    console.log("The Day is: " + day);
    console.log("The Time is: " + time);   
}
currentDate();