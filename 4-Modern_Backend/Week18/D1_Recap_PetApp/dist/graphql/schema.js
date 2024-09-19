import { gql } from "apollo-server-express";
const schema = gql `
  type Pet {
    id: ID!
    name: String!
    species: String
    happiness: Int
  }
  type Query {
    pets: [Pet!]!
    pet(id: ID!): Pet
  }
  type Mutation {
    createPet(name: String!, species: String!): Pet!
    updatePetHappiness(id: ID!, happiness: Int!): Pet
    deletePet(id: ID!): Pet
  }
`;
export default schema;
