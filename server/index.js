import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import schema from './schema/schema.js'

const port = process.env.PORT || 5001

connectDB()

const app = express()

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
)
