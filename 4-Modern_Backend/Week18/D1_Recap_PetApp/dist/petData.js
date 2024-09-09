let pets = [
    { id: 1, name: "Fluffy", species: "Cat", happiness: 50 },
    { id: 2, name: "Buddy", species: "Dog", happiness: 60 },
];
const getPets = () => pets;
const getAPet = (id) => pets.find((pet) => pet.id === id);
const createPet = (name, species) => {
    const newPet = {
        id: pets.length + 1,
        name,
        species,
        happiness: 50,
    };
    pets.push(newPet);
    return newPet;
};
const updatePetHappiness = (id, happiness) => {
    const pet = pets.find((pet) => pet.id === id);
    if (pet) {
        pet.happiness = happiness;
        return pet;
    }
    return null;
};
const deletePet = (id) => {
    const petIndex = pets.findIndex((pet) => pet.id === id);
    if (petIndex >= 0) {
        const pet = pets[petIndex];
        pets.splice(petIndex, 1);
        return pet;
    }
    return null;
};
export default {
    getPets,
    getAPet,
    createPet,
    updatePetHappiness,
    deletePet,
};
