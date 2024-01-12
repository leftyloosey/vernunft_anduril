import Client from '../models/Client.js'

const resolvers = {
  Query: {
    greetings: () => 'GraphQL is Awesome',
    clientList: async () => {
      return await Client.find({})
    },
    // login: async (parent, args, context, info) => {
    //   const { id } = args
    //   return Client.findById(id)
    // },
    fuck: async (parent, args, context, info) => {
      const { name } = args
      return await Client.findOne({ name })
    },
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
