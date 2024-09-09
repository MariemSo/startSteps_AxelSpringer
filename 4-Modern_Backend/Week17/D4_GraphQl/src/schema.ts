import { gql } from "apollo-server-express";

//Define GraphQl Schema
const typeDefs = gql`
  enum Genre {
    FICTION
    NON_FICTION
    SCIENCE_FICTION
    MYSTERY
  }
  scalar Date

  type Book {
    id: ID!
    title: String!
    author: String!
    genre: Genre
    publishedDate: Date
  }

  input BookInput {
    title: String!
    author: String!
    genre: Genre
    publishedDate: Date
  }

  type Query {
    book(id: ID!): Book
    books: [Book!]!
  }
  type Mutation {
    addBook(input: BookInput!): Book!
    deleteBook(id: ID!): Book!
    updateBook(id: ID!, title: String!, author: String!): Book!
  }
`;
export { typeDefs };
