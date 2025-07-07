import Client from '../models/Client.js'
import List from '../models/List.js'

const resolvers = {
  Query: {
    clientList: async () => {
      return await Client.find({})
    },
    listList: async () => {
      return await List.find({})
    },
    getNames: async (parent, args, context, info) => {
      const { id, names } = args
      return await List.findById(id)
    },
  },

  Mutation: {
    createClient: async (parent, args) => {
      const { name, email, phone } = args
      const newClient = new Client({
        name,
        email,
        phone,
      })
      await newClient.save()
      return newClient
    },
    createList: async (parent, args) => {
      const { listName } = args
      const newList = new List({
        listName: listName,
      })
      await newList.save()
      return newList
    },
    getOneMutation: async (parent, args, context, info) => {
      const { id, names } = args

      return await List.findByIdAndUpdate(
        id,
        { $push: { names: names } },
        { new: true }
      )
    },
    getOneBobby: async (parent, args, context, info) => {
      const { id, email } = args
      return await Client.findByIdAndUpdate(id, { email: email }, { new: true })
    },
    changeListName: async (parent, args, context, info) => {
      const { id, listName } = args
      return await List.findByIdAndUpdate(
        id,
        { $set: { listName: listName } },
        { new: true }
      )
    },
    clearListNames: async (parent, args, context, info) => {
      const { id } = args
      return await List.findByIdAndUpdate(
        id,
        { $set: { names: [] } },
        { new: true }
      )
    },
  },
}

export default resolvers
