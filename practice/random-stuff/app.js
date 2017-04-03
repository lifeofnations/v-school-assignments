function grabRandom(max) {
    return Math.floor(Math.random() * max);
}

function groupMaker(peopleArray, size) {
    var finalGroups = [];
    var newGroup = [];
    while (peopleArray.length) {
        newGroup.push(peopleArray.splice(grabRandom(peopleArray.length), 1));
        if (newGroup.length === size) {
            finalGroups.push(newGroup.join().split(","));
            newGroup = [];
        }
    }
    finalGroups.push(newGroup.join().split(","));
    if (finalGroups[finalGroups.length - 1].length === 1) {
        finalGroups[grabRandom(finalGroups.length - 1)].push(finalGroups[finalGroups.length - 1][0]);
        finalGroups.pop();
    }
    return finalGroups;
}

var inClassStudents = ["Aaron", "Brenan", "Jason", "Ayanda", "Mana", "Simone", "Lucy", "Parker", "Titus", "Terry", "Tim", "Jimmy", "Eric", "Steve"];

console.log(groupMaker(inClassStudents, 3));