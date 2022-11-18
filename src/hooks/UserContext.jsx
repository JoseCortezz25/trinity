import { useEffect, useState, createContext } from 'react'
import { deleteToken, getCurrentUser, getToken } from '../services/localStorage'
import { getUserById } from '../services/service'

const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    getUserById(parseInt(getCurrentUser()), getToken())
      .then((res) => {
        setUser(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const logout = () => {
    setUser({})
    deleteToken()
  }

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
