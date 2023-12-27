import Client from '../models/Client.js'

const resolvers = {
  Query: {
    greetings: () => 'GraphQL is Awesome',
    clientList: () => {
      return Client.find()
    },
  },
}

export default resolvers
