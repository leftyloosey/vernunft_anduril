// mongodb+srv://lefty:lefty@cluster0.fpuucsj.mongodb.net/2blendz

import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    // const conn = await mongoose.connect(
    //   'mongodb+srv://lefty:lefty@cluster0.fpuucsj.mongodb.net/2blendz'
    // )
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
