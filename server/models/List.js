import mongoose from 'mongoose'

const listSchema = new mongoose.Schema({
  listName: {
    type: String,
  },
  names: {
    type: [String],
  },
})

const List = mongoose.model('List', listSchema)

export default List
