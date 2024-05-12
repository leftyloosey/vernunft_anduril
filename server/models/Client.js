import mongoose from 'mongoose'

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
})

const Client = mongoose.model('Client', clientSchema)

export default Client
