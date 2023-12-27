import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    clientList: [Client!]!
    greetings: String
  }

  type Client {
    name: String!
    email: String!
    phone: String!
  }
`
export default typeDefs
