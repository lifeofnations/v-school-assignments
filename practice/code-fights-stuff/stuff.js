var array =[0,1,2,3,4,5,6,7,8];

var someObject = {
    name: "object",
    something: "something else"
}

//for (var i = 0; i < array.length; i++) {
//    array
//}


//for (var key in someObject) {
//    console.log(someObject[key])
//}

//object["name"]
function saySomething (something) {
    console.log(something);
}

function saySomethigOrNot(callback) {
    callback("hey");   
}

saySomethigOrNot(saySomething);

document.getElementById("id").addEventListener("click", saySomething)

//function Constructor() {
//    
//}