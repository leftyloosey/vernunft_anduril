import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import typeDefs from './schema/typeDefs.js'
import resolvers from './resolvers/resolvers.js'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'

import cors from 'cors'
import http from 'http'

const port = process.env.PORT || 5002

connectDB()

// const app = express()
// const httpServer = http.createServer(app)
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
// })

// await server.start()

// app.use(
//   '/graphql',
//   cors({
//     origin: [
//       'http://localhost:3000',
//       'https://studio.apollographql.com',
//       'http://localhost:5002',
//     ],
//   }),
//   express.json(),
//   expressMiddleware(server)
// )

// await new Promise((resolve) => httpServer.listen({ port }, resolve))
// console.log(`🚀 Server ready at ${port}`)

const server = new ApolloServer({ typeDefs, resolvers })

startStandaloneServer(server, {
  listen: { port },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
