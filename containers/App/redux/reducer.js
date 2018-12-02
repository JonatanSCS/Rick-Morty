// Action
import { UPDATE_SEARCH, UPDATE_CATEGORY } from './constants'

export const initialState = {
  search: '',
  category: { value: 'character', label: '' }
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
    case UPDATE_CATEGORY:
      return { ...state, category: action.category }
    default:
      return state
  }
}
