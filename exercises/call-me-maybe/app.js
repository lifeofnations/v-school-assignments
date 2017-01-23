var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];

function attemptCall(name, dontCall, call, text) {
    if (name.toLowerCase().lastIndexOf("a") - name.toLowerCase().indexOf("a") != 0) {
        return text(name);
    } else if (name.length % 2 === 0) {
        return call(name);
    } else {
        return dontCall(name);
    }
}


function dontCall(name) {
    console.log("Don't call: " + name);
}

function call(name) {
    console.log("Call: " + name);
}

function text(name) {
    console.log("Text: " + name);
}


for (var i = 0; i < names.length; i++) {
    attemptCall(names[i], dontCall, call, text);
}