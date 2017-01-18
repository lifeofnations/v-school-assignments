var box = document.getElementById("box");
var body = document.getElementById("body");

function blue() {
    box.style.backgroundColor = "blue";
}
function red() {
    box.style.backgroundColor = "red";
}
function yellow() {
    box.style.backgroundColor = "yellow";
}
function green() {
    box.style.backgroundColor = "green";
}
function orange() {
    box.style.backgroundColor = "orange";
}

box.addEventListener("mouseover", blue);
box.addEventListener("mousedown", red);
box.addEventListener("mouseup", yellow);
box.addEventListener("dblclick", green);
body.addEventListener("wheel", orange);
body.addEventListener("keydown", function(event) {
    switch (event.which) {
        case 66:
            blue();
            break;
        case 82:
            red();
            break;
        case 89:
            yellow();
            break;
        case 71:
            green();
            break;
        case 79:
            orange();
            break;
        default:
            break;
    }
});
//66 Blue when the mouse hovers over the square
//82 Red when the mouse button is held down over the square
//89 Yellow when the mouse button is let go over the square
//71 Green when the mouse is double clicked in the square
//79 Orange when the mouse scroll is used somewhere in the window (not over the square).