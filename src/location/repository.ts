import maxmind, { CountryResponse } from 'maxmind'
import path from 'node:path'
import { IRepository } from './repository.interface'

const DB_NAME = 'dbip-country-lite-2023-12'
const DB_PATH = path.resolve(__dirname, '..', '..', 'data', `${DB_NAME}.mmdb`)

const clientPromise = maxmind.open<CountryResponse>(DB_PATH)

export const repository: IRepository = {
  async getLocationByIp(ip) {
    const client = await clientPromise
    const countryResponse = client.get(ip)

    if (!countryResponse || !countryResponse.country || !countryResponse.continent) {
      return null
    }

    return {
      country: countryResponse.country,
      continent: countryResponse.continent,
    }
  },
}
