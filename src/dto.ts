export type CountryDto = {
  geonameId: number
  isInEuropeanUnion?: boolean
  isoCode: string
  name: string
}

export type CountinentDto = {
  geonameId: number
  code: string
  name: string
}

export type LocateResponse = {
  country: CountryDto
  continent: CountinentDto
}
