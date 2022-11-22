import { useEffect, useState, createContext } from 'react'
import { deleteToken, getCurrentUser, getToken } from '../services/localStorage'
import { getUser } from '../services/service'

const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    getUser(parseInt(getCurrentUser()), getToken())
      .then((res) => {
        setUser(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const logout = () => {
    setUser({})
    deleteToken()
    // window.location.href = "/formulario/login";
  }

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
