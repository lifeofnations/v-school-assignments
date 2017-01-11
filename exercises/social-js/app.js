var evilOverlord = {
    userName: "Doomlord",
    firstName: "Norman",
    lastName: "Randal",
    landsUnderDomination: ["North Vale"],
    fullName: function () {
        return this.firstName + " '" + this.userName + "' " + this.lastName;
    },
    alliesAndRivals: [
        {
            name: "Gregor",
            totalLandsUnderDomination: 3,
            relationship: "Friend",
            battlesTogether: [
                {
                    battleName: "Battle of North Vale",
                    battleOutcome: "Victory",
                    wasAgainst: false
                },
                {
                    battleName: "Fight for Venom Bay",
                    battleOutcome: "Defeat",
                    wasAgainst: true
                }
            ]
        },
        {
            name: "TerrorKnight",
            totalLandsUnderDomination: 9,
            relationship: "Rival",
            battlesTogether: [
                {
                    battleName: "Battle for Dread Pass",
                    battleOutcome: "Defeat",
                    wasAgainst: true
                },
                {
                    battleName: "Battle for Dread Castle",
                    battleOutcome: "Defeat",
                    wasAgainst: true
                }
            ]
        },
        {
            name: "Tiny Pesant",
            totalLandsUnderDomination: 0,
            relationship: "Rival",
            battlesTogether: [
                {
                    battleName: "Attack on the Small Village",
                    battleOutcome: "Victory",
                    wasAgainst: true
                },
                {
                    battleName: "Raid on the Survivors Camp",
                    battleOutcome: "Victory",
                    wasAgainst: true
                }
            ]
        }
    ]
}

evilOverlord.age = 477;
evilOverlord.motto = "Death to peasants!";

evilOverlord.landsUnderDomination.push("Small Village", "Survivors Camp");

console.log(evilOverlord.fullName());
console.log(evilOverlord.landsUnderDomination);
console.log(evilOverlord.age);
console.log(evilOverlord.motto);