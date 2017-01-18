var enemyArray = [];

function enemyType() {
    var type = Math.floor(Math.random() * 3);
    if (type === 0) {
        type = "Ancient Dragon";
    } else if (type === 1) {
        type = "Prowler";
    } else {
        type = "Mighty Grunt";
    }
    return type;
}
//could also have done same thing but index into an array with 0, 1, 2. Less wordy and better to read.

function enemyHP(type) {
    if (type === "Ancient Dragon") {
        return Math.floor(Math.random() * (100 - 80 + 1)) + 80;
    } else if (type === "Prowler") {
        return Math.floor(Math.random() * (79 - 50 + 1)) + 50;
    } else {
        return Math.floor(Math.random() * (49 - 20 + 1)) + 20;
    }
}

function EnemyGenerator() {
    this.type = enemyType();
    this.hitPoints = enemyHP(this.type);
    this.defense = this.hitPoints * 3;
}

function howManyEnemies(number) {
    enemyArray = [];
    for (var i = 0; i < number; i++) {
        var enemy = new EnemyGenerator();
        enemyArray.push(enemy);
    }
}

howManyEnemies(100);
console.log(enemyArray);