// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Data" type defines the queryable fields for every book in our data source.
type Message {
    from: String
    to: String
    text: String
}

type Supplier {
    id: Int
    name: String
}

type Company {
  name: String
  suppliers: [Supplier]
}

type Data {
    firstName: String
    lastName: String
    company: Company
    messages: [Message]
}

type Product {
  id: Int
  name: String
  description: String
  features: String
  price: Float
}


  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "data" query returns an array of zero or more Data (defined above).
  type Query {
    getUsersList: [Data]
    product: [Product]
  }
`;
