import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/schema.js";
import "dotenv/config";

const {
  PORT = 2225,
  USER,
  DATABASE,
  HOST,
  PASSWORD = "",
  DB_PORT,
} = process.env;

const data = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    company: {
      name: "LLC",
      suppliers: [
        { id: 1, name: "ebay" },
        { id: 2, name: "shopify" },
      ],
    },
    messages: [
      { from: "Paul Jones", to: "John Doe", text: "Hi! I want to make order" },
      {
        from: "John Doe",
        to: "Paul Jones",
        text: "Hello! How could i help you?",
      },
    ],
  },
  {
    firstName: "Jane",
    lastName: "McArthur",
    email: "jane@gmail.com",
    company: {
      name: "small company",
      suppliers: [
        { id: 1, name: "etsy" },
        { id: 2, name: "wix" },
      ],
    },
    messages: [
      { from: "Viktoria", to: "Jane", text: "Hi! How are you" },
      { from: "Jane", to: "Viktoria", text: "I'm fine" },
    ],
  },
];

const resolvers = {
  Query: {
    getUsersList: () => [data],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: Number(PORT) },
});

console.log(`🚀  Server ready at: ${url}`);
