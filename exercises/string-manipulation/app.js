var ask = require("readline-sync");
console.log("Hi, you can trust me, I promise..");
var firstName = ask.question("What is your name? ");
var lastName = ask.question("Awesome, " + firstName + ", but what about your last name? ");
var fullName = firstName.concat(" " + lastName);
var birthday = ask.question("Great! Now, " + fullName + ", give me your date of birth? ");
console.log(birthday + ", perfect. Now just give me a sec..\n..hmmm... this is turning out to be harder than I thought..");
console.log("Hey, " + firstName + ", could you help me out?\nCan you give me some more info about you so I can datamine....\num.. I mean get to know you better?")
var moreData = ask.question("Just type whatever comes to mind ");
console.log("Sorry, what was that? You are pretty booring. I only caught:\n" + moreData.slice(moreData.length / 2));
var userData = ask.question("Give me a number between 0 and " + (moreData.length - 1) + ".\nI should be able to figure out the rest. ");
console.log("Got it! " + moreData.slice(userData));













//var ask = require('readline-sync');  
//console.log('Hello! My name is Betty. Help me get to know you!\n');  
//var firstName = ask.question('What is your first name? ');  