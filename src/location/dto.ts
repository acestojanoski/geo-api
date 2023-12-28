export type CountryDto = {
	geonameId: number
	isInEuropeanUnion?: boolean
	code: string
	name: string
}

export type CountinentDto = {
	geonameId: number
	code: string
	name: string
}

export type LocateResponse = {
	ip: string
	country: CountryDto
	continent: CountinentDto
}
