import express from 'express'
import { routes } from './routes'

const server = express()

server.use(express.static('public'))
server.use('/api', routes)

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`Server listening on port ${port}.`)
})
