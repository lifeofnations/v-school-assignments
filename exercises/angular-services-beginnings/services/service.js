angular.module("myApp")


.service("PokeService", [function () {
    this.pokemon = ["squirtle"],
    this.addPokemon = function(pokeName) {
        this.pokemon.push(pokeName);
    },
    this.removePokemon = function(pokeName) {
        this.pokemon.splice(this.pokemon.indexOf(pokeName), 1);
    }
    
    
    
    
}])