import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    clientList: [Client]
    listList: [List]
    getNames(id: ID, names: [String]): List
  }

  type Client {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }

  type List {
    id: ID!
    listName: String
    names: [String]
  }

  type Mutation {
    createClient(name: String!, email: String!, phone: String!): Client
    createList(listName: String): List
    getOneMutation(id: ID, names: [String]): List
    getOneBobby(id: ID, email: String): Client
    changeListName(id: ID, listName: String): List
    clearListNames(id: ID): List
  }
`
export default typeDefs
