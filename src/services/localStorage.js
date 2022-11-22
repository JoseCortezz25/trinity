const TOKEN = "token";
const USER = "user";
const ROLE = "role";

export const setToken = (token) => {
  window.localStorage.setItem(TOKEN, token);
};

export const setCurrentUser = (user) => {
  window.localStorage.setItem(USER, user);
};

export const setRoleUser = (role) => {
  window.localStorage.setItem(ROLE, role);
}

export const getToken = () => {
  return window.localStorage.getItem(TOKEN);
};

export const getCurrentUser = () => {
  return window.localStorage.getItem(USER);
};

export const getRoleUser = () => {
  return window.localStorage.getItem(ROLE);
};

export const deleteToken = () => {
  window.localStorage.removeItem(TOKEN);
  window.localStorage.removeItem(USER);
  window.localStorage.removeItem(ROLE);
  window.localStorage.clear();
};

export const validateUser = (idOtherUser, idCurrentUser) => {
  return idOtherUser === idCurrentUser;
};
