import { combineReducers } from 'redux'

import themeReducer from './theme'

const reducers = combineReducers({
  darkTheme: themeReducer,
})

export default reducers
