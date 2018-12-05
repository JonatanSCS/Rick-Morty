// Constants
import { UPDATE_ITEMS, UPDATE_FILTERS } from './constants'

export const updateItems = (items, page, max) => {
  return {
    type: UPDATE_ITEMS,
    items,
    page,
    max
  }
}

export const updateFilter = (name, value) => {
  return {
    type: UPDATE_FILTERS,
    name,
    value
  }
}

export const fetchData = (service, page, filters = {}, dispatch) => {
  return service(page, filters).then(({ data }) => {
    dispatch(updateItems(data.results, page, data.info.pages))
  })
}
