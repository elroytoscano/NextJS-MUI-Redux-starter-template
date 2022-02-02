import { CHANGE_THEME } from './constants'
import { LocalStorage } from '../../../utils'

const loadStorageData = () => {
  const value = LocalStorage.loadData('darkMode')
  return value === null ? false : value
}

const ThemeReducer = (state = loadStorageData, { type }) => {
  switch (type) {
    case CHANGE_THEME:
      const newState = !state
      LocalStorage.saveData('darkMode', newState)
      return newState
    default:
      return state
  }
}

export default ThemeReducer
