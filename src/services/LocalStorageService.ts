import AsyncStorage from '@react-native-async-storage/async-storage'

const setLocalStorage = async (key: string, value: unknown) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.error(`Error storing data for key "${key}": ${e}`)
  }
}

const getLocalStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)

    return jsonValue != null ? JSON.parse(jsonValue) : ''
  } catch (e) {
    console.error(`Error getting data for key "${key}": ${e}`)

    return null
  }
}

const removeLocalStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log('Error retrieving from AsyncStorage:', e)

    return null
  }
}

export const LocalStorageService = {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
}
