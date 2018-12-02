// Action
import { UPDATE_SEARCH } from './constants'

export const initialState = {
  search: '',
  category: { value: 'character', label: 'Personaje' }
}

/**
 * reducer of Header App
 * @param {object} state of reducer
 * @param {object} action to dispatch
 * @returns {object} next state
 */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return { ...state, search: action.search }
    default:
      return state
  }
}
