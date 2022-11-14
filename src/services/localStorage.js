const TOKEN = "token";
const USER = "user";
const STATUS = "status";

export const setToken = (token) => {
  window.localStorage.setItem(TOKEN, token);
};

export const setCurrentUser = (user) => {
  window.localStorage.setItem(USER, user);
};

export const setUserStatus = (user) => {
  window.localStorage.setItem(STATUS, user);
};

export const getToken = () => {
  return window.localStorage.getItem(TOKEN);
};

export const getCurrentUser = () => {
  return window.localStorage.getItem(USER);
};

export const getUserStatus = () => {
  return window.localStorage.getItem(STATUS);
};

export const deleteToken = () => {
  window.localStorage.removeItem(TOKEN);
  window.localStorage.removeItem(USER);
  window.localStorage.removeItem(STATUS);
  window.localStorage.clear();
};

export const validateUser = (idOtherUser, idCurrentUser) => {
  return idOtherUser === idCurrentUser;
};
