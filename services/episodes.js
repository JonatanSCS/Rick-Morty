// Dependencies
import axios from 'axios'

// Endpoints
import { EPISODES_PAGINATION, EPISODE_MULTIPLE } from 'constants/index'

// Utils
import { getRandomNumbers, setUrlParmsByObject } from 'utils/data'

export const fetchEpisodesByPage = (page, filters) => {
  return axios(EPISODES_PAGINATION(page) + setUrlParmsByObject(filters))
}

export const fetchMultipleEpisodes = items => {
  return axios(EPISODE_MULTIPLE(getRandomNumbers(items, 31, 1)))
}
