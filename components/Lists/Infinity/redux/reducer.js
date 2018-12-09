// Action
import { UPDATE_ITEMS, UPDATE_FILTER, UPDATE_FILTERS } from './constants'

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
      const _items =
        action.page === 1
          ? [...action.items]
          : [...state.items, ...action.items]
      return {
        ...state,
        items: _items,
        page: action.page,
        max: action.max
      }
    case UPDATE_FILTER:
      return {
        items: [],
        page: 1,
        max: null,
        filters: {
          ...state.filters,
          [action.name]: action.value
        }
      }
    case UPDATE_FILTERS:
      return {
        ...state,
        items: [],
        page: 1,
        max: null,
        filters: action.filters
      }
    default:
      return state
  }
}
