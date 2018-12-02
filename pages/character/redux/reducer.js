// Action
import { UPDATE_CHARACTER } from './constants'

export const initialState = {
  character: {}
}

/**
 * reducer of Character Detail
 * @param {object} state of reducer
 * @param {object} action to dispatch
 * @returns {object} next state
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CHARACTER:
      return { character: action.character }
    default:
      return state
  }
}
