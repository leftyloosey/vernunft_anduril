import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    clientList: [Client]
    listList: [List1]
    greetings: String
    login(id: ID!): Client
    fuck(name: String): Client
    getNames(id: ID, names: [String]): List1
    getOne(id: ID, listName: String): List1
  }

  type Client {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }

  type List1 {
    id: ID!
    listName: String
    names: [String]
  }

  type Mutation {
    create(name: String!, email: String!, phone: String!): Client
    createList1(listName: String): List1
    getOneMutation(id: ID, names: [String]): List1
    getOneBobby(id: ID, email: String): Client
    changeList1Name(id: ID, listName: String): List1
    clearList1Names(id: ID): List1
  }
`
export default typeDefs
