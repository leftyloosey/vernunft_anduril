import Client from '../models/Client.js'
import List1 from '../models/List1.js'

const resolvers = {
  Query: {
    greetings: () => 'GraphQL is Awesome',
    clientList: async () => {
      return await Client.find({})
    },
    listList: async () => {
      return await List1.find({})
    },
    // login: async (parent, args, context, info) => {
    //   const { id } = args
    //   return Client.findById(id)
    // },
    fuck: async (parent, args, context, info) => {
      const { name } = args
      return await Client.findOne({ name })
    },
    // fuck2: async (parent, args, context, info) => {
    //   const { fuck2Id } = args
    //   return await Client.findOne({ fuck2Id })
    // },
    getNames: async (parent, args, context, info) => {
      const { id, names } = args
      return await List1.findById(id)
    },
    // getOne: async (parent, args, context, info) => {
    //   const { id } = args
    //   console.log(id)
    //   // const id = '6639b9313f1a848c33ad97bf'
    //   return await List1.findOne({ id })
    // },
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
    createList1: async (parent, args) => {
      const { listName } = args
      const newList1 = new List1({
        listName: listName,
      })
      await newList1.save()
      return newList1
    },
    getOneMutation: async (parent, args, context, info) => {
      const { id, names } = args

      return await List1.findByIdAndUpdate(
        id,
        { $push: { names: names } },
        { new: true }
      )
    },
    getOneBobby: async (parent, args, context, info) => {
      const { id, email } = args
      return await Client.findByIdAndUpdate(id, { email: email }, { new: true })
    },
    changeList1Name: async (parent, args, context, info) => {
      const { id, listName } = args
      return await List1.findByIdAndUpdate(
        id,
        { $set: { listName: listName } },
        { new: true }
      )
    },
    clearList1Names: async (parent, args, context, info) => {
      const { id } = args
      return await List1.findByIdAndUpdate(
        id,
        { $set: { names: [] } },
        { new: true }
      )
    },
  },
}

export default resolvers
