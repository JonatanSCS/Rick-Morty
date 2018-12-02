// Constants
import { UPDATE_FORM } from './constants'

export const updateForm = (name, value) => {
  return {
    type: UPDATE_FORM,
    name,
    value
  }
}
