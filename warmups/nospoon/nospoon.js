var vase = {
    isHard: true,
    shape: "cone",
    color: "green",
    hasContents: true,
    contentType: {
        organic: true,
        living: false
    },
    grow: function () {
        console.log("I'm not alive!");
    }
};
var table = {
    isHard: true,
    shape: ["rectangle", "cylinder"],
    color: ["white", "black"],
    hasContents: false,
    flip: function () {
        console.log("(╯°□°）╯︵ ┻━┻");
    }
};
var sprinkler = {
    isHard: true,
    shape: "complex",
    color: "bronze",
    hasContents: true,
    contentType: {
        organic: false,
        living: false,
        elemental: true
    },
    spray: function () {
        console.log("Please don't light me on fire!");
    }
};
var mouse = {
    isHard: true,
    shape: "complex",
    color: "bronze",
    hasContents: true,
    contentType: "batteries",
    clickMouse: function () {
        console.log("CLICK");
    }
};
var coffeeCup = {
    isHard: true,
    shape: "cylinder",
    color: ["white", "pink"],
    hasContents: true,
    contentType: ["coffee", "liquid"],
    spill: function () {
        console.log("Careful, I'm hot!");
    }
}
var coat = {
    isHard: false,
    shape: "clothing",
    color: "black",
    wear: function () {
        console.log("It's raining, you should wear a coat");
        window.isSunny = false;
    }
}
var window = {
    isHard: true,
    shape: "rectangle",
    color: "transparent",
    isSunny: true,
    open: function () {
        console.log("This window can't be opened");
        table.flip();
    }
    
}

var shelf = {
    isHard: true,
    shape: "rectangle",
    color: "black",
    useShelf: function () {
        coffeeCup.location = "shelf";
        console.log("You have just placed the coffee cup on the " + coffeeCup.location);
    }
}
var phone = {
    isHard: true,
    shape: "rectangle",
    color: ["yellow", "black", "brown"],
    callPhone: function () {
        console.log("Ring! Ring!");
    }
}
var messengerBag = {
    isHard: false,
    shape: "bag",
    color: "black",
    hasContents: true,
    contentType: "food",
    useBag: function () {
        phone.location = "messengerBag";
        this.contentType = messengerBag.contentType.split(" ");
        this.contentType.push("phone");
    }
}
console.log(window.isSunny);
coat.wear();
console.log(window.isSunny);