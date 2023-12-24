import type { CountryResponse } from 'maxmind'

export type Location = {
  country: NonNullable<CountryResponse['country']>
  continent: NonNullable<CountryResponse['continent']>
}
