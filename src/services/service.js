const API_URL = import.meta.env.VITE_API

const options = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const getLearningPaths = async (token) => {
  const tokenResult = options(token)
  const result = await fetch(`${API_URL}/aprender/paths`, tokenResult)
  const data = result.json()
  return data
}

export const getListOfRecommendations = async (token) => {
  const tokenResult = options(token)
  const result = await fetch(`${API_URL}/aprender/recommendations`, tokenResult)
  const data = result.json()
  return data
}

export const getTopicsByPath = async (path, token) => {
  const tokenResult = options(token)
  const result = await fetch(`${API_URL}/aprender/topics/${path}`, tokenResult)
  const data = result.json()
  return data
}

export const login = async (userData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(userData)
  }
  try {
    const result = await fetch(`${API_URL}/login`, config)
    console.log('result', result);
    if (result.status === 401) return { error: true, message: "El usuario no esta registrado. Cuidado con tus credenciales." }
    const data = result.json()
    return data
  } catch (error) {
    return error
  }
}

export const register = async (userData) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ userData })
    }
    const results = await fetch(`${API_URL}/register`, config)
    return results.json()
  } catch (error) {
    return error
  }
}