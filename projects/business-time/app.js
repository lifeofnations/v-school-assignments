function numGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var techKeyWords = ["Enterprise", "Cloud", "Solutions", "Future", "Server", "Functional", "Design", "Logic", "Innovation", "Data", "Puzzle"];

var techDescriptors = ["Functional", "Clear", "Dependable", "Forward", "Direct", "Sustainable", "Variable"];

var buisnessFinish = ["Group", "Unlimited", "Tech", "Incorporated"];

var techButton = document.getElementById("tech-button");
var techName = document.getElementById("tech-name");

function techNameGenerator() {
    techName.textContent = techDescriptors[numGenerator(0, 6)] + " " + techKeyWords[numGenerator(0, 8)] + " " + buisnessFinish[numGenerator(0, 3)];
}

techButton.addEventListener("click", techNameGenerator);