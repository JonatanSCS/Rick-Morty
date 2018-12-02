// Base API URL
export const BASE_API_URL = 'https://rickandmortyapi.com/api/'

// Characters URLs
export const CHARACTER_URL = `${BASE_API_URL}character/`

export const CHARACTERS_PAGINATION = page => `${CHARACTER_URL}?page=${page}`

// Locations URLs
export const LOCATION_URL = `${BASE_API_URL}location/`
export const LOCATION_PAGINATION = page => `${LOCATION_URL}?page=${page}`
