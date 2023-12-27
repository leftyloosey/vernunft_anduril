import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    clientList: [Client!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Client {
    name: String!
    email: String!
    phone: String!
  }
`
