var ask = require("readline-sync");
var dictionary = [];
var active = true;
var realDictionary = {};

dictionary[wordInput] = definitionInput;

function addToDictionary(wordInput, definitionInput) {
    var toAdd = {
        word: wordInput,
        definition: definitionInput
    };
    alreadyAddedChecker(wordInput);
    dictionary.push(toAdd);
}

function alreadyAddedChecker(wordInput) {
    for (var i = 0; i < dictionary.length; i++) {
        if ((dictionary[i].word.includes(wordInput) || wordInput.includes(dictionary[i].word)))  {
            console.log("That word is already in the dictionary! I'll be happy to give you the definition :)\n");
            return false;
        }
        return true;
    }
}

function dictionaryLookUp(word) {
    for (var i = 0; i < dictionary.length; i++) {
        if (dictionary[i].word === word) {
            console.log("\n" + dictionary[i].word + ":");
            console.log(dictionary[i].definition)
            return;
        }
        console.log("sorry I don't know that word, why don't you tell me?\n");
    }
}

function useDictionary(add, lookUp) {
    var userInput = ask.question("What would you like to do? 'lookup' a word, 'add' a word or 'list' all words I know? ");
    switch (userInput) {
    case "list":
        listWords();
        break;
    case "lookup":
        var whatWord = ask.question("\nWhat word would you like to look up? ");
        dictionaryLookUp(whatWord);
        break;
    case "add":
        var newWord = ask.question("\nWhat word would you like to add? ");
        var definition = ask.question("\nWhat is the definition of this word? ");
        addToDictionary(newWord, definition);

        realDictionary[newWord] = definition;


        break;
    case "quit":
        active = false;
        break;
    default:
        console.log("I'm sorry, I don't understant what you are asking?\n");
    }
}

function listWords() {
    for (var i = 0; i < dictionary.length; i++) {
        console.log(dictionary[i].word);
    }
}

while (active) {
    useDictionary();
}