const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const loadData = (key) => {
  if (typeof localStorage === 'undefined') return null
  else {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }
}

export { saveData, loadData }
