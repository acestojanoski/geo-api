import express from 'express'
import { routes as statusRoutes } from './status/routes'
import { routes as locationRoutes } from './location/routes'

const server = express()

server.use(express.static('public'))

server.use('/api', statusRoutes)
server.use('/api', locationRoutes)

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`Server listening on port ${port}.`)
})
