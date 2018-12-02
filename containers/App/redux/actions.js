// Constants
import { UPDATE_SEARCH } from './constants'

export const updateSearch = search => {
  return {
    type: UPDATE_SEARCH,
    search
  }
}
