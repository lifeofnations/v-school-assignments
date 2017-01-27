var hour = document.getElementById("hour");
var min = document.getElementById("min");
var minTen = document.getElementById("min10")
var sec = document.getElementById("sec");
var secTen = document.getElementById("sec10");
secTen.textContent = 2;
sec.textContent = 0;
hour.textContent = 0;
min.textContent = 0;
var countdown = setInterval(timer, 1000);

function timer() {
    if (sec.textContent <= 0) {
        sec.textContent = 9;
        if (secTen.textContent <= 0) {
            minMinus();
            secTen.textContent = 5;
        } else {
            secTen.textContent--;
        }
    } else {
        sec.textContent--
    }
}

function minMinus() {
    if (min.textContent <= 0) {
        hourMinus();
        min.textContent = 59;
    } else {
        min.textContent--;
    }
}

function hourMinus() {
    if (hour.textContent <=0) {
        clearInterval(countdown);
        console.log("the world has ended!")
    }
}
