import { combineReducers } from 'redux'

import componentListInfinity from 'components/Lists/Infinity/redux/reducer'
import containerApp from 'containers/App/redux/reducer'
import pageCharacterDetail from 'pages/character/redux/reducer'

/**
 * Combine all reducers from all components
 * @param {object} history of reducer
 * @return { combineReducers } from 'redux'
 */
export default function createReducer() {
  return combineReducers({
    componentListInfinity,
    containerApp,
    pageCharacterDetail
  })
}
