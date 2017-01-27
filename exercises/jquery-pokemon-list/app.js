$.get("http://pokeapi.co/api/v1/pokedex/1/", function(data) {
    console.log(data);
    for (var i = 0; i < data.pokemon.length; i ++)
    $("#poke-printer").append('<a href="https://www.google.com/#safe=off&q=' + data.pokemon[i].name + '"><h4 class="col-xs-6 col-sm-4 col-md-3">' + (i + 1) + ": " + data.pokemon[i].name + '</h4></a>');
}); 





//http://pokeapi.co/api/v1/pokedex/1/