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
import path from 'path'
import { fileURLToPath } from 'url'

import cors from 'cors'
import http from 'http'

const port = process.env.PORT || 5002

connectDB()

const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory

const app = express()
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app)

// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})
// Ensure we wait for our server to start
await server.start()

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
  '/',
  cors(),
  // 50mb is the limit that `startStandaloneServer` uses, but you may configure this to suit your needs
  express.json({ limit: '50mb' }),
  // expressMiddleware accepts the same arguments:
  // an Apollo Server instance and optional configuration options
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
)

// app.use(express.static(path.join(__dirname, 'client/build')))
app.use(express.static('client/public'))

// app.get('*', (req, res) => {
//   console.log(res)

//   res.send('hello')
// })
// res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))

app.get('/hello', (req, res) => {
  res.send('hello')
  console.log(res)
})
// res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))

// app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/public', 'index.html'))
})

// Modified server startup
await new Promise((resolve) => httpServer.listen({ port: port }, resolve))
console.log(`🚀 Server ready at http://localhost:${port}`)

// const server = new ApolloServer({ typeDefs, resolvers })

// startStandaloneServer(server, {
//   listen: { port },
// }).then(({ url }) => {
//   console.log(`Server ready at ${url}`)
// })
