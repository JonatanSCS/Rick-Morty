// Dependencies
import axios from 'axios'

// Endpoints
import { EPISODES_PAGINATION, EPISODE_MULTIPLE } from 'constants/index'

// Utils
import { getRandomNumbers } from 'utils/data'

export const fetchEpisodesByPage = page => {
  return axios(EPISODES_PAGINATION(page))
}

export const fetchMultipleEpisodes = items => {
  return axios(EPISODE_MULTIPLE(getRandomNumbers(items, 31, 1)))
}
