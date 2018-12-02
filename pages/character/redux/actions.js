// Constants
import { UPDATE_CHARACTER } from './constants'

export const updateCharacter = character => {
  return {
    type: UPDATE_CHARACTER,
    character
  }
}
