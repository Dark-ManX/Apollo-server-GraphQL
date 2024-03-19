// const typeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
//   # This "Data" type defines the queryable fields for every book in our data source.
//   type Supplier {
//     name: String
//     type: String
//   }
//   type Message {
//     from: String
//     to: String
//     text: String
//   }
//   type Data {
//     firstName: String
//     lastName: String
//     email: /^[\w\.-]+@[\w]+\.[\w]{2,4}$/
//     role: String
//     company: {
//         id: Integer
//         name: String
//         suppliers: Supplier[]
//     }
//     messages: Message[]
//   }
//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     data: [Data]
//   }
// `;
// module.exports = typeDefs;
