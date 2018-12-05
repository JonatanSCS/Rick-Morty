// Action
import { UPDATE_ITEMS, UPDATE_FILTERS } from './constants'

export const initialState = {
  items: [],
  page: 1,
  max: null,
  filters: {}
}

/**
 * reducer of Character Detail
 * @param {object} state of reducer
 * @param {object} action to dispatch
 * @returns {object} next state
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ITEMS:
      return {
        ...state,
        items: [...state.items, ...action.items],
        page: action.page,
        max: action.max
      }
    case UPDATE_FILTERS:
      return {
        items: [],
        page: 1,
        max: null,
        filters: {
          ...state.filters,
          [action.name]: action.value
        }
      }
    default:
      return state
  }
}
