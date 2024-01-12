import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    clientList: [Client]
    greetings: String
    login(id: ID!): Client
    fuck(name: String!): Client
  }

  type Client {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }

  type Mutation {
    create(name: String!, email: String!, phone: String!): Client
  }
`
export default typeDefs
