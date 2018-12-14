// Constants
import {
  UPDATE_CHARACTER,
  UPDATE_ATTEMPT_CHAR,
  HANDLE_ATTEMPT
} from './constants'

// Services
import { fetchMultipleCharacters } from 'services/characters'

export const updateCharacter = character => {
  return {
    type: UPDATE_CHARACTER,
    character
  }
}

export const fetchCharacter = dispatch => {
  fetchMultipleCharacters(1).then(({ data }) => {
    dispatch(updateCharacter(data))
  })
}

export const setAttemptCharacter = (character = '') => {
  return {
    type: UPDATE_ATTEMPT_CHAR,
    character
  }
}

export const handleAttempt = character => {
  return {
    type: HANDLE_ATTEMPT,
    character
  }
}
