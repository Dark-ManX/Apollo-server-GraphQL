// export {};
const { ApolloServer } = require("@apollo/server");
const startStandaloneServer = require("@apollo/server/standalone");
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Data" type defines the queryable fields for every book in our data source.
  type Supplier {
    name: String
    type: String
  }
  type Message {
    from: String
    to: String
    text: String
  }

  type Data {
    firstName: String
    lastName: String
    email: /^[\w\.-]+@[\w]+\.[\w]{2,4}$/
    role: String
    company: {
        id: Integer
        name: String
        suppliers: Supplier[]
    }
    messages: Message[]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    data: [Data]
  }
`;
require("dotenv").config();
const data = {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    role: "admin",
    company: {
        id: 2,
        name: "Super company",
        suppliers: [
            {
                name: "supplier 1",
                type: "expensive and quick",
            },
            {
                name: "supplier 2",
                type: "cheap and slow",
            },
        ],
    },
    messages: [
        {
            from: "Paul Jones",
            to: "John Doe",
            text: "Hello! Order 1 to delivery",
        },
        {
            from: "John Doe",
            to: "Paul Jones",
            text: "Hello Paul! Tomorrow we will send it",
        },
    ],
};
const resolvers = {
    Query: {
        data: () => data,
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { PORT = 2225 } = process.env;
const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
});
console.log(`🚀 Server ready at ${url}`);
export {};
