import mongoose from 'mongoose'

const list1Schema = new mongoose.Schema({
  listName: {
    type: String,
  },
  names: {
    type: [String],
  },
})

const List1 = mongoose.model('List1', list1Schema)

export default List1
