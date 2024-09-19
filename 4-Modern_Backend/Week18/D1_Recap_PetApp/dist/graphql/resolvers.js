import petModule from "../petData.js";
const resolvers = {
    Query: {
        pets: () => petModule.getPets(),
        pet: (_, { id }) => {
            const petId = Number(id);
            const pet = petModule.getAPet(petId);
            return pet;
        },
    },
    Mutation: {
        createPet: (_, { name, species }) => {
            return petModule.createPet(name, species);
        },
        updatePetHappiness: (_, { id, happiness }) => {
            const petId = Number(id);
            return petModule.updatePetHappiness(petId, happiness);
        },
        deletePet: (_, { id }) => {
            const petId = Number(id);
            return petModule.deletePet(petId);
        },
    },
};
export default resolvers;
