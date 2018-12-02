// Dependencies
import axios from 'axios'

// Endpoints
import { LOCATION_PAGINATION, LOCATION_MULTIPLE } from 'constants/index'

// Utils
import { getRandomNumbers } from 'utils/data'

export const fetchLocationsByPage = page => {
  return axios(LOCATION_PAGINATION(page))
}

export const fetchMultipleLocations = items => {
  return axios(LOCATION_MULTIPLE(getRandomNumbers(items, 67, 1)))
}
