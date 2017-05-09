var petOwner = {
    name: "Shirley",
    age: 51,
    favoriteAnimals: ["cat", "dog", "fish"],
    petsOwned: [
        {
            petName: "Spot",
            yearsOwned: 3,
            animalType: {
                species: "dog",
                breed: "black lab"
            }
        },
        {
            petName: "Athena",
            yearsOwned: 4,
            animalType: {
                species: "snake",
                breed: "ball python"
            }
        },
        {
            petName: "Neal",
            yearsOwned: 2,
            animalType: {
                species: "cat",
                breed: "unknown"
            }
        },
        {
            petName: "Navin",
            yearsOwned: 2,
            animalType: {
                species: "cat",
                breed: "tabby"
            }
        }

    ],
    petsWanted: [
        {
            animal1: {
                species: "cat",
                breed: "siamese"
            },
            animal2: {
                species: "squirrel",
                breed: "flying squirrel"
            }
        }
    ]
};

console.log("Current favorite animals: " + petOwner.favoriteAnimals);

petOwner.favoriteAnimals.push("squirrel");
petOwner.favoriteAnimals.push("snake");

console.log("New favorite animals: " + petOwner.favoriteAnimals);

petOwner.petNumber = 4;
petOwner.favoriteCatBreeds = ["tabby", "ragdoll", "siamese"];

console.log(petOwner.name + " has " + petOwner.petNumber + " pets, and " + petOwner.name + "'s favorite cat breeds are: " + petOwner.favoriteCatBreeds);
