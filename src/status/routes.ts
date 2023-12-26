import { Router } from 'express'
import { handler } from '../shared/utils'

export const routes = Router()

routes.get(
  '/status',
  handler((_, res) => {
    res.setHeader('content-type', 'text/plain')
    res.send('ok')
  }),
)
