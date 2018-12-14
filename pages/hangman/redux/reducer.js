// Utils
import { removeDuplicateCharacters } from 'utils/data'

// Action
import {
  UPDATE_CHARACTER,
  UPDATE_ATTEMPT_CHAR,
  HANDLE_ATTEMPT
} from './constants'

export const initialState = {
  character: null,
  isLoading: true,
  attempt: '',
  letters: [],
  corrects: [],
  attempts: 0,
  fail: false,
  success: false,
  successCount: 0
}

/**
 * reducer of Hangman Game
 * @param {object} state of reducer
 * @param {object} action to dispatch
 * @returns {object} next state
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CHARACTER:
      const character = action.character
      const _spaceName = character.name
        .toLowerCase()
        .split(' ')
        .join('')
      const letters = character.name.toLowerCase().split('')

      return {
        ...state,
        isLoading: false,
        character,
        letters,
        attempts: Math.floor(_spaceName.length * 1.5),
        successCount: removeDuplicateCharacters(_spaceName).length
      }
    case UPDATE_ATTEMPT_CHAR:
      return {
        ...state,
        attempt: action.character
      }
    case HANDLE_ATTEMPT:
      const newCorrects = [...state.corrects, action.character]
      return {
        ...state,
        corrects: newCorrects,
        success: newCorrects.length === state.successCount
      }
    default:
      return state
  }
}
