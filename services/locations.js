// Dependencies
import axios from 'axios'

// Endpoints
import { LOCATION_PAGINATION } from 'constants/index'

export const fetchLocationsByPage = page => {
  return axios(LOCATION_PAGINATION(page))
}
