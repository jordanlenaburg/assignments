//establish global variables

var ask = require("readline-sync");
var baddie;
var inventory = {
    Name: "",
    From: "",
    Health: 100,
    Items: "None",
    Goal: "None",
}
var from = "";
//establish criteria to win
var winGame = (Math.floor(Math.random() * 5) + 5);
var turns = 0
//enemy constructor
function Enemy() {
    this.type = typeGen();
    this.hitPoints = hp(this.type);
}

//introduction
console.log(`
 _______  _______  _______ _________ _______ 
(  ____ \\(  ____ \\(  ____ )\\__   __/(       )
| (    \\/| (    \\/| (    )|   ) (   | () () |
| (_____ | |      | (____)|   | |   | || || |
(_____  )| |      |     __)   | |   | |(_)| |
      ) || |      | (\\ (      | |   | |   | |
/\\____) || (____/\\| ) \\ \\_____) (___| )   ( |
\\_______)(_______/|/   \\__/\\_______/|/     \\|
\n\n\nWelcome to the world of SCRIM.\n\nYou awake to find yourself laying on the sandy ground, a tall, completely bald man wearing flowing robes standing over you. Looking around, you see that you are somewhere in a desert. On the northern horizon, you see what must be a city.`);
//ask for player's name
var player = ask.question("Man: 'What is your name?'\n");
inventory.Name = player;
//ask for where player is from
var from = ask.question("Man: 'I see. You must have traveled a long way to arrive in Scrim. Where are you from?'\n");
inventory.From = from;
console.log("Man: 'You're a long way from home " + player + ". Scrim is a dangerous land. Do you have anything to help you survive?'\n\nStanding, you search yourself for any items you might have.\n\n")
//introduce print function
var action = ask.question("Type 'print' to see your inventory.\n")
if (action === "print") {
    console.log(inventory);
    console.log("\n");
} else {
    console.log("Type 'print' at any point to print your inventory\n");
}
console.log("Man: Looks like you don't have much. Here, take this dagger to help you survive. If you go north you'll get to the city where you can be safe.\n\nYou got a Used Dagger!\n\n");

//change inventory
inventory.Items = "Used Dagger";
inventory.Goal = "Get to the city";

//first turn
whatToDo();

//turn function
function whatToDo() {
    //check if enough turns have passed to win game
    if (turns > winGame) {
        win();
        //exit game
        return;
    }
    //check what player would like to do
    action = ask.question("You stand in the hot, dusty desert with the sun beating down on you.\nTo walk toward town, type 'w'. To look around type 'l'. To view your inventory type 'print'.\n")
    if (action === "print") {
        console.log(inventory);
        whatToDo();
    } else if (action === "l") {
        lookAround();
    } else if (action === "w") {
        walk()
    }
}
//lookAround() loops back into whatToDo()
function lookAround() {
    console.log("You stand in the middle of the desert, with nothing around you. If you don't get out soon, you may die\n");
    console.log(`
               .
            \\  :  / 
             ' _ '
         -= ( (_) ) =-
             .   .
            /  :  \\
        .-.    '
        |.|
      /)| |(\\
     (.(|'|) )
  ~~~~ \\ './ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        |.|           ~~
        | |                            ~~
       ,|'|.                ~~
\n`);
    whatToDo();
}

//generates random enemy type to Enemy()
function typeGen() {
    var rand = Math.random();
    if (rand <= .33) {
        return "Ancient Dragon";
    } else if (rand >= .66) {
        return "Prowler";
    } else {
        return "Mighty Grunt";
    }
};

//generates random HP to Enemy()
function hp(gen) {
    if (gen === "Ancient Dragon") {
        return (Math.floor((Math.random() * 20)) + 81);
    } else if (gen === "Prowler") {
        return (Math.floor((Math.random() * 20)) + 50);
    } else {
        return (Math.floor((Math.random() * 20)) + 20);
    }
}

//main turn function
function walk() {
    var rand = Math.random();
    //check to see if enemy appears 1/3 chance
    if (rand <= .33) {
        //create new Enemy() and assign to var baddie
        baddie = new Enemy();
        console.log("As you walk toward the city a " + baddie.type + " has appeared!")
        //choose to fight or run (if anything but f is typed it will cound as run)
        fightOrFlight();
    }
    //if no enemy appears, add 1 to turn counter and run whatToDo()
    else {
        turns += 1;
        whatToDo();
    }
}
//fight enemy or run away logic
function fightOrFlight() {
    var fightOrFlight = ask.question("Do you choose to fight or run? Type 'f' to fight or 'r' to run\n")
    if (fightOrFlight === "f") {
        fight();
    } else {
        run();
    }
}

//run away logic 50% of success
function run() {
    var rand = Math.random();
    if (rand < .50) {
        console.log("You got away!");
        //add 1 to turn counter if run away is successful
        turns += 1;
        //reset baddie type
        baddie = {};
        whatToDo();
    } else {
        console.log("Your escape is blocked as the enemy attacks you!");
        //enemy gets free attack if run fails
        enemyAttack();
    }
}
//fight logic, 100% successful hit
function fight() {
    var rand = Math.random();
    //depending on item type, do different amounts of damage
    if (inventory.Items === "Used Dagger") {
        var dmg = (Math.floor(rand * 10) + 1);
    } else if (inventory.Items === "Cool Mace") {
        var dmg = (Math.floor(rand * 50) + 25);
    } else if (inventory.Items === "AWESOME MAGIC SWORD OF SLAYING") {
        var dmg = (Math.floor(rand * 50) + 75);
    }
    //subtract damage done from baddie
    baddie.hitPoints -= dmg;
    console.log("You attack the " + baddie.type + " with your " + inventory.Items + ". You do " + dmg + " damage to the creature! It has " + baddie.hitPoints + " health left.");
    //baddie death logic

    if (baddie.hitPoints > 0) {
        //if baddie is still alive, it attacks
        enemyAttack();
    } else {
        enemyDie();
    }
}
//enemy attack logic 100% successful hit
function enemyAttack() {
    //depending on baddie type, deal different damage
    if (baddie.type === "Ancient Dragon") {
        var dmg = (Math.floor((Math.random() * 20)) + 30);
    } else if (baddie.type === "Prowler") {
        var dmg = (Math.floor((Math.random() * 20)) + 15);
    } else {
        var dmg = (Math.floor((Math.random() * 20)) + 5);
    }
    //subtract dmg from inventory.Health
    inventory.Health -= dmg;
    console.log("The " + baddie.type + " hits you for " + dmg + "! You now have " + inventory.Health + " health left!")
    //player death logic
    if (inventory.Health > 0) {
        //if player is still alive, they can run or fight
        fightOrFlight();
    } else {
        die();
    }
}
//player death message
function die() {
    console.log("\n\nThe " + baddie.type + " swipes at you fiercely, ripping into you. Warm blood gushes from the gaping wound as you you stare with unblinking eyes. Slowly, the world fades to black as you topple to the ground. Your body will soon be buried beneath the sands or picked clean by the creatures roaming through the desert. Laying on the ground, the words of the mysterious man echo within your mind, 'Scrim is a dangerous land' . . . \n\n\n Thanks for playing!")
    console.log(`
 _______  _______  _______ _________ _______ 
(  ____ \\(  ____ \\(  ____ )\\__   __/(       )
| (    \\/| (    \\/| (    )|   ) (   | () () |
| (_____ | |      | (____)|   | |   | || || |
(_____  )| |      |     __)   | |   | |(_)| |
      ) || |      | (\\ (      | |   | |   | |
/\\____) || (____/\\| ) \\ \\_____) (___| )   ( |
\\_______)(_______/|/   \\__/\\_______/|/     \\|
`)
}
//enemy death logic
function enemyDie() {
    //gain random amount of health up to 20
    inventory.Health += (Math.floor(Math.random() * 20) + 1)
    console.log("You slice into the " + baddie.type + " with your " + inventory.Items + ", killing it. It wails in agony as it thrashes in death. You now have " + inventory.Health + " health.");
    //generate item for player
    itemGen();
    //add to turn counter
    turns += 1;
    //return to whatToDo
    whatToDo();
}
//item generation logic
function itemGen() {
    var rand = Math.random()
    //10% chance of magic sword
    if (rand < .1 && (inventory.Items != "AWESOME MAGIC SWORD OF SLAYING")) {
        inventory.Items = "AWESOME MAGIC SWORD OF SLAYING";
        console.log("You found an 'AWESOME MAGIC SWORD OF SLAYING'!")
        //40% chance of cool mace
    } else if (rand < .5 && (inventory.Items !== ("AWESOME MAGIC SWORD OF SLAYING" || "Cool Mace"))) {
        inventory.Items = "Cool Mace";
        console.log("You found a 'Cool Mace!");
    }
}
//win game message
function win() {
    console.log("\n\nAs your wearly legs push onward and your head hangs with exhaustion you stumble through a gate. Looking up, you realize you have made it to the city. You have made it to safety.\n")
    console.log(`
            |   _   _
      . | . x .|.|-|.|
   |\\ ./.\\-/.\\-|.|.|.|
~~~|.|_|.|_|.|.|.|_|.|~~~
`)
    console.log("\n\n\nYou win! You made it through Scrim safely! Thanks for playing!")
    console.log(`
 _______  _______  _______ _________ _______ 
(  ____ \\(  ____ \\(  ____ )\\__   __/(       )
| (    \\/| (    \\/| (    )|   ) (   | () () |
| (_____ | |      | (____)|   | |   | || || |
(_____  )| |      |     __)   | |   | |(_)| |
      ) || |      | (\\ (      | |   | |   | |
/\\____) || (____/\\| ) \\ \\_____) (___| )   ( |
\\_______)(_______/|/   \\__/\\_______/|/     \\|
`)
}
