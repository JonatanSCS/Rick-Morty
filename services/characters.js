// Dependencies
import axios from 'axios'

// Endpoints
import {
  CHARACTERS_PAGINATION,
  CHARACTERS_MULTIPLE,
  CHARACTER_ID
} from 'constants/index'

// Utils
import { getRandomNumbers, setUrlParmsByObject } from 'utils/data'

export const fetchCharactersByPage = (page, filters) => {
  return axios(CHARACTERS_PAGINATION(page) + setUrlParmsByObject(filters))
}

export const fetchMultipleCharacters = items => {
  return axios(CHARACTERS_MULTIPLE(getRandomNumbers(items, 394, 1)))
}

export const fetchCharacterById = id => {
  return axios(CHARACTER_ID(id))
}
