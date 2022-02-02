import { useSelector } from 'react-redux'

const useThemeSettings = () => {
  return useSelector(({ darkTheme }) => darkTheme)
}

export default useThemeSettings
