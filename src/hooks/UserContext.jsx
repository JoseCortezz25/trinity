import { useState, createContext } from "react";
import { deleteToken } from "../services/localStorage";

const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  const logout = () => {
    setUser({});
    deleteToken();
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
