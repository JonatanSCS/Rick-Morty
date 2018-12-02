// Dependencies
import axios from 'axios'

// Endpoints
import { EPISODES_PAGINATION } from 'constants/index'

export const fetchEpisodesByPage = page => {
  return axios(EPISODES_PAGINATION(page))
}
