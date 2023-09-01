import { Message } from '../types/EmailData.type'

function fetchJsonData(url: string) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error reading JSON file:', error)
      throw error
    })
}

async function fetchMessages() {
  try {
    const messages = await fetchJsonData('/dist/assets/messages.json')
    return messages as Message[]
  } catch (error) {
    return []
  }
}

async function fetchUsers() {
  try {
    const users = await fetchJsonData('/dist/assets/users.json')
    return users
  } catch (error) {
    return []
  }
}

export { fetchMessages, fetchUsers }
