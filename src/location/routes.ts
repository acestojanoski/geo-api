import { Router } from 'express'
import { service } from './service'
import { LocateResponse } from './dto'
import { handler } from '../shared/utils'

export const routes = Router()

routes.get(
  '/locate/:ip?',
  handler(async (req, res) => {
    const xForwardedFor = Array.isArray(req.headers['x-forwarded-for'])
      ? req.headers['x-forwarded-for'][0]
      : req.headers['x-forwarded-for']

    const ip = xForwardedFor || req.socket.remoteAddress

    if (!ip) {
      res.status(400).json({ message: 'No IP was provided.' })
      return
    }

    const location = await service.locateIp(ip)

    if (!location) {
      res.status(404).json({ message: `Cannot locate ip ${ip}` })
      return
    }

    const result: LocateResponse = {
      ip,
      country: {
        geonameId: location.country.geoname_id,
        isInEuropeanUnion: location.country.is_in_european_union,
        code: location.country.iso_code,
        name: location.country.names.en,
      },
      continent: {
        geonameId: location.continent.geoname_id,
        code: location.continent.code,
        name: location.continent.names.en,
      },
    }

    res.json(result)
  }),
)
