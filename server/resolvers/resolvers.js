import Client from '../models/Client.js'

const resolvers = {
  Query: {
    greetings: () => 'GraphQL is Awesome',
    clientList: async () => {
      return await Client.find({})
    },
    // students: async () => await Student.find({}),
  },
  Mutation: {
    create: async (parent, args) => {
      const { name, email, phone } = args
      const newClient = new Client({
        name,
        email,
        phone,
      })
      await newClient.save()
      return newClient
    },
  },
}

export default resolvers
