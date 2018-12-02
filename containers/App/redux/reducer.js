// Action
import { UPDATE_FORM } from './constants'

export const initialState = {
  search: '',
  category: null
}

/**
 * reducer of Header App
 * @param {object} state of reducer
 * @param {object} action to dispatch
 * @returns {object} next state
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FORM:
      return { ...state, [action.name]: action.value }
    default:
      return state
  }
}
