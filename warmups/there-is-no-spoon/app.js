var coffee = {
    orogin: "pot",
    style: "black",
    isHot: true,
    caution: function() {
        if (this.isHot) {
            console.log("Caution: HOT");
        }
    }  
};

var mac = {
    year: 2015,
    type: "pro",
    currentScreens: 2,
    displayOwner: function() {
        console.log("Steve");
    }
};

var chair = {
    type: "swivel",
    colors: [white, blue],
    doesRecline: true,
    spin: function() {
        console.log("You just spun in a circle!");
    }
};

var phone = {
    brand: "Samsung",
    model: "S7 Edge",
    isOn: true,
    chargeReminder: function() {
        console.log("Have you remembered to charge your phone?");
    }
};

var bottle = {
    brand: "Hydro Flask",
    color: "purple",
    contents: "water",
    owner: function() {
        return "Steve's" + " " + this.brand;
    }
};

var headphones = {
    brand: "Samsung",
    color: "White",
    hasMicrophone: true,
    hasVolumeControl: true,
    audioWarning: function() {
        console.log("Don't listen too loud!");
    }
};

var shoes = {
    brand: "Solomon",
    color: "green",
    notTightend: false,
    ifNotTightend: function() {
        if (this.ifNotTightend) {
            console.log("Be sure to tighten your laces");
        }
    }
};

var door = {
    material: "wood",
    hasKnob: "false",
    repair: function() {
        if (!this.hasKnob) {
            console.log("Maybe you should get that fixed");
        }
    }
};

var projector = {
    brand: "BENQ",
    needsPower: false,
    isOff: false,
    powerCheck: function() {
        if (this.needsPower || this.isOff) {
            console.log("Be sure to plug in and turn on your projector before use.");
        }
    }
};

var wallet = {
    colors: ["orange", "purple"],
    style: "standard tri-fold",
    hasMoney: false,
    poorChecker: function() {
        if (!this.hasMoney) {
            console.log("that sucks...");
        }
    }
};