import petModule from "../petData.js";

const resolvers = {
  Query: {
    pets: () => petModule.getPets(),

    pet: (_:any, { id }: { id: string }) => {
      const petId = Number(id);
      const pet = petModule.getAPet(petId);
      return pet;
    },
  },
  Mutation: {
    createPet: (_:any, { name, species }: { name: string; species: string }) => {
      return petModule.createPet(name, species);
    },
    updatePetHappiness: (
      _:any,
      { id, happiness }: { id: string; happiness: number }
    ) => {
      const petId = Number(id);
      return petModule.updatePetHappiness(petId, happiness);
    },
    deletePet: (_:any, { id }: { id: string }) => {
      const petId = Number(id);
      return petModule.deletePet(petId);
    },
  },
};

export default resolvers;
