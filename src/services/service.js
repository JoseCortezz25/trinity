import axios from "axios";
const API_URL = import.meta.env.VITE_API;

const options = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const PAGE_SIZE = 10

export const getAllLevels = async (token) => {
  try {
    return axios.get(`${API_URL}/levels`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const getAllRoles = async (token) => {
  try {
    return axios.get(`${API_URL}/roles-trinity`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const createContent = async (data, token) => {
  try {
    return axios.post(`${API_URL}/contents`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const getAllContents = async (token) => {
  try {
    return axios.get(`${API_URL}/contents?populate=*&fields[0]=title&fields[1]=link&fields[2]=description&pagination[pageSize]=10`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const getContentsByPage = async (page, token) => {
  try {
    return axios.get(`${API_URL}/contents?populate=*&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const getContent = async (id, token) => {
  try {
    return axios.get(`${API_URL}/contents/${id}?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const deleteContent = async (id, token) => {
  try {
    return axios.delete(`${API_URL}/contents/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const updateContent = async (id, data, token) => {
  try {
    return axios.put(`${API_URL}/contents/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    return error
  }
}

export const createSyllabus = async (data, token) => {
  try {
    return axios.post(`${API_URL}/temarios`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const getAllSyllabus = async (token) => {
  try {
    return axios.get(`${API_URL}/temarios?populate=*&pagination[pageSize]=${PAGE_SIZE}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const getSyllabusByPage = async (page, token) => {
  try {
    return axios.get(`${API_URL}/temarios?populate=*&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const getSyllabus = async (id, token) => {
  try {
    return axios.get(`${API_URL}/temarios/${id}?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const getSyllabusWithContents = async (id, token) => {
  try {
    return axios.get(`${API_URL}/temarios/${id}?[populate][level]=*&[populate][contents][populate][level]=*`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const deleteSyllabus = async (id, token) => {
  try {
    return axios.delete(`${API_URL}/temarios/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const updateSyllabus = async (id, data, token) => {
  try {
    return axios.put(`${API_URL}/temarios/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    return error
  }
}

export const createLearningPath = async (learningPath, token) => {
  try {
    return axios.post(`${API_URL}/learningpaths`, { data: learningPath }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const getAllLearningPaths = async (token) => {
  try {
    return axios.get(`${API_URL}/learningpaths?pagination[pageSize]=${PAGE_SIZE}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const getLearningPathsByPage = async (page, token) => {
  try {
    return axios.get(`${API_URL}/learningpaths?populate=*&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const getLearningPath = async (id, token) => {
  try {
    return axios.get(`${API_URL}/learningpaths/${id}?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const getLearningPathWithTemarios = async (id, token) => {
  try {
    return axios.get(`${API_URL}/learningpaths/${id}?[fields][0]=title&[fields][1]=description&[populate][temarios][populate][level]=*`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const deleteLearningPath = async (id, token) => {
  try {
    return axios.delete(`${API_URL}/learningpaths/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const updateLearningPath = async (id, data, token) => {
  try {
    return axios.put(`${API_URL}/learningpaths/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    return error
  }
}

export const getAllRecommendations = async (token) => {
  try {
    return axios.get(`${API_URL}/recommend-resources?pagination[pageSize]=${PAGE_SIZE}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const getRecommendationsByPage = async (page, token) => {
  try {
    return axios.get(`${API_URL}/recommend-resources?populate=*&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const getRecommendation = async (id, token) => {
  try {
    return axios.get(`${API_URL}/recommend-resources/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const addRecommendations = async (data, token) => {
  try {
    return axios.post(`${API_URL}/recommend-resources`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const deleteRecommendation = async (id, token) => {
  try {
    return axios.delete(`${API_URL}/recommend-resources/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const updateRecommendation = async (id, data, token) => {
  try {
    return axios.put(`${API_URL}/recommend-resources/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    return error
  }
}

export const login = async (data) => {
  try {
    return axios.post(`${API_URL}/auth/local`, data, {
      "Content-Type": "application/json",
    });
  } catch (error) {
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
    return axios.get(`${API_URL}/users?populate=*?pagination[pageSize]=${PAGE_SIZE}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    return error
  }
}

export const getUsersByPage = async (page, token) => {
  try {
    return axios.get(`${API_URL}/users?populate=*&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
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

export const getUser = (id, token) => {
  try {
    return axios.get(`${API_URL}/users/${id}?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
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