import mongoose from 'mongoose'
import Client from './Client.js'

const listSchema = new mongoose.Schema({
  listName: {
    type: String,
  },
  names: {
    type: [String],
  },
  // clients: {
  //   type: [Client],
  // },
})

const List = mongoose.model('List', listSchema)

export default List
