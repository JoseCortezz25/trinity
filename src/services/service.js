import axios from "axios";
const API_URL = import.meta.env.VITE_API;
const API_URL2 = import.meta.env.VITE_API_DOS;

const options = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getLearningPaths = async (token) => {
  const tokenResult = options(token);
  const result = await fetch(`${API_URL2}/aprender/paths`, tokenResult);
  const data = result.json();
  return data;
};

export const getListOfRecommendations = async (token) => {
  const tokenResult = options(token)
  const result = await fetch(`${API_URL2}/aprender/recommendations`, tokenResult)
  const data = result.json()
  return data
}

export const getTopicsByPath = async (path, token) => {
  const tokenResult = options(token);
  const result = await fetch(`${API_URL2}/aprender/topics/${path}`, tokenResult);
  const data = result.json();
  return data;
};

export const login = async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      }
    }

    return axios.post(`${API_URL}/auth/local`, data, config);
  } catch (error) {
    console.log(error);
    return error
  }
};

export const registerAccount = async (data) => {
  try {
    return axios.post(`${API_URL}/users`, data);
  } catch (error) {
    return error
  }
};

export const getAllUsers = async (token) => {
  try {
    const tokenResult = options(token);
    const results = await fetch(`${API_URL}/users`, tokenResult)
    return results.json()
  } catch (error) {
    return error
  }
}

export const getUserById = async (id, token) => {
  try {
    const tokenResult = options(token);
    const results = await fetch(`${API_URL}/users/${id}`, tokenResult)
    return results.json()
  } catch (error) {
    return error
  }
}

export const updateUser = async (id, data, token) => {
  try {
    return axios.put(`${API_URL}/users/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    return error
  }
}

export const createNewUser = async (data, token) => {
  try {
    return axios.post(`${API_URL}/users`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    return error
  }
};

export const deleteUser = async (id, token) => {
  try {
    return axios.delete(`${API_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    return error
  }
};