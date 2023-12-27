import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import typeDefs from './schema/typeDefs.js'
import resolvers from './resolvers/resolvers.js'

const port = process.env.PORT || 5001

connectDB()

const server = new ApolloServer({ typeDefs, resolvers })

startStandaloneServer(server, {
  listen: { port: process.env.PORT || 5001 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
