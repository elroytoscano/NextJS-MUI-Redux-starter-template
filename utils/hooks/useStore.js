import { useMemo } from 'react'
import { initializeStore } from '../../lib'

function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

export default useStore
