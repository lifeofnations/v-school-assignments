
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.vschool.io:6543/pokemon.json");
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = JSON.parse(xhr.responseText);
        //console.log(data);
        //console.log(data.objects[0].pokemon[0])
        var data = jsonData.objects[0].pokemon;
        parsePokemon(data);
        console.log(data);
    }
}

function parsePokemon(input) {
    for (var i = 0; i < input.length; i++){
        var li = document.createElement("li");
        var poke = document.createTextNode(input[i].name);
        li.appendChild(poke);
        document.getElementById("poke-list").appendChild(li);
    }
}


var aNumber = Number()













//http://api.vschool.io:6543/pokemon.json