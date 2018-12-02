// Constants
import { UPDATE_SEARCH, UPDATE_CATEGORY } from './constants'

export const updateSearch = search => {
  return {
    type: UPDATE_SEARCH,
    search
  }
}

export const updateCategory = category => {
  return {
    type: UPDATE_CATEGORY,
    category
  }
}
