// Dependencies
import axios from 'axios'

// Endpoints
import { CHARACTERS_PAGINATION } from 'constants/index'

export const fetchCharactersByPage = page => {
  return axios(CHARACTERS_PAGINATION(page))
}
