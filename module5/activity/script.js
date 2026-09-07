// Step 1: Create and display a dog using an object literal.
const myDog = {
    name: "Scooby-Doo",
    breed: "Great Dane",
    tvProgram: "Scooby-Doo, Where Are You!",
    notes: "lifelong companion of Shaggy Rogers",
    mySound: "Ruh-roh! I may sound nervous because mysteries scare me."
};

const literalMessage =
    `My favorite animated dog is ${myDog.name}. ` +
    `${myDog.name} is a ${myDog.breed} who starred in ${myDog.tvProgram}. ` +
    `${myDog.name} is the ${myDog.notes}. ${myDog.mySound}`;

document.getElementById("literal-output").textContent = literalMessage;

// Step 2: Use a simple constructor to create another dog object.
function Dog(name, breed, tvProgram, notes, mySound, canTalk) {
    this.name = name;
    this.breed = breed;
    this.tvProgram = tvProgram;
    this.notes = notes;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // This method returns a greeting that uses every object property.
    this.myGreeting = function () {
        const talkMessage = this.canTalk
            ? "It is true that I can talk."
            : "It is false that I can talk.";

        return `Hello, my name is ${this.name}. ${this.mySound} ` +
            `I starred in the TV show ${this.tvProgram}. ` +
            `My character was a ${this.breed}. ${this.notes}. ${talkMessage}`;
    };
}

const myDogConst = new Dog(
    "Scooby-Doo",
    "Great Dane",
    "Scooby-Doo, Where Are You!",
    "I am the lifelong companion of Shaggy Rogers",
    'When I bark, I say "Ruh-roh!"',
    true
);

// Step 3: Call the object's method and display its greeting.
document.getElementById("constructor-output").textContent =
    myDogConst.myGreeting();
