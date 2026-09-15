// Step 1: Define the Dog constructor and its properties.
function Dog(name, breed, tvProgram, notes, mySound, canTalk) {
    this.name = name;
    this.breed = breed;
    this.tvProgram = tvProgram;
    this.notes = notes;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // The conditional checks this dog's canTalk value.
    this.myGreeting = function () {
        let talkingMessage;

        if (this.canTalk) {
            talkingMessage = "I can talk!";
        } else {
            talkingMessage = "I cannot talk.";
        }

        return `Hello, my name is ${this.name}. I am a ${this.breed} from ` +
            `${this.tvProgram}. ${this.notes}. ${this.mySound} ${talkingMessage}`;
    };
}

// Step 2: Create two dog objects with the constructor.
const scoobyDoo = new Dog(
    "Scooby-Doo",
    "Great Dane",
    "Scooby-Doo, Where Are You!",
    "I am the lifelong companion of Shaggy Rogers",
    'When I bark, I say "Ruh-roh!"',
    true
);

const snoopy = new Dog(
    "Snoopy",
    "Beagle",
    "Peanuts",
    "I am Charlie Brown's imaginative pet dog",
    "I usually communicate through expressions and thoughts",
    false
);

const dogObjects = [scoobyDoo, snoopy];

// Convert property names such as tvProgram and canTalk into readable labels.
function createLabel(propertyName) {
    const labels = {
        name: "Name",
        breed: "Breed",
        tvProgram: "TV Program",
        notes: "Description",
        mySound: "My Sound",
        canTalk: "Can Talk"
    };

    return labels[propertyName] || propertyName;
}

// Step 3: Use a for...in loop to display every data property and value.
function displayDogProperties(dog, container) {
    const card = document.createElement("section");
    card.className = "dog-card";

    const heading = document.createElement("h2");
    heading.textContent = dog.name;
    card.appendChild(heading);

    for (const property in dog) {
        if (typeof dog[property] !== "function") {
            const propertyLine = document.createElement("p");
            const displayedValue = typeof dog[property] === "boolean"
                ? (dog[property] ? "Yes" : "No")
                : dog[property];

            propertyLine.textContent = `${createLabel(property)}: ${displayedValue}`;
            card.appendChild(propertyLine);
        }
    }

    container.appendChild(card);
}

const dogList = document.getElementById("dog-list");
for (const dog of dogObjects) {
    displayDogProperties(dog, dogList);
}

// Step 4: Ask the user to select a dog and call its myGreeting method.
const userSelection = prompt(
    "Select a dog by typing Scooby-Doo or Snoopy:"
);

const selectedOutput = document.getElementById("selected-output");
const selectedDog = dogObjects.find(function (dog) {
    return userSelection !== null &&
        dog.name.toLowerCase() === userSelection.trim().toLowerCase();
});

if (selectedDog) {
    selectedOutput.textContent = selectedDog.myGreeting();
} else {
    selectedOutput.className = "error";
    selectedOutput.textContent =
        "Error: The dog you selected does not exist. Please choose Scooby-Doo or Snoopy.";
}
