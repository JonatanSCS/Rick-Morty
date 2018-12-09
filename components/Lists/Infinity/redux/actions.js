// Utils
import debounce from 'lodash/debounce'

// Constants
import { UPDATE_ITEMS, UPDATE_FILTER, UPDATE_FILTERS } from './constants'

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
    type: UPDATE_FILTER,
    name,
    value
  }
}

export const updateFilters = filters => {
  return {
    type: UPDATE_FILTERS,
    filters
  }
}

const getData = (service, page, filters, dispatch) => {
  return service(page, filters)
    .then(({ data }) => {
      dispatch(updateItems(data.results, page, data.info.pages))
    })
    .catch(() => {
      dispatch(updateItems([], 1, null))
    })
}

const _searchData = debounce(getData, 500)

export const fetchData = (service, page, filters = {}, dispatch) => {
  return _searchData(service, page, filters, dispatch)
}
