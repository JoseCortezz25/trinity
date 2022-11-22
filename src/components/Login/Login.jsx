/* eslint-disable camelcase */
import { useState, useContext } from 'react'
import {
  setCurrentUser,
  setRoleUser,
  setToken,
} from '../../services/localStorage'
import { Link, useNavigate } from 'react-router-dom'
import { getUser, login } from '../../services/service'
import UserContext from '../../hooks/UserContext'
import { logoIcon } from '../../assets'
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({ error: false, message: '' })
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)

  const loginUser = async (identifier, password) => {
    try {
      const result = await login({ identifier, password })
      const {
        data: { jwt, user },
      } = result
      console.log('user', user)
      setCurrentUser(user.id)
      setToken(jwt)
      return {
        jwt,
        user,
      }
    } catch (error) {
      return error
    }
  }

  const getDataUser = async (id, token) => {
    try {
      const result = await getUser(id, token)
      const {
        data: { roles_trinity },
      } = result
      setUser(result.data)
      setRoleUser(roles_trinity.name)
      return roles_trinity.name
    } catch (error) {
      return error
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await loginUser(email, password)
      const result2 = await getDataUser(result.user.id, result.jwt)
      if (result2 === 'ADMIN') {
        navigate('/admin')
      } else {
        navigate('/aprender')
      }
    } catch (error) {
      return setError({
        error: error.error,
        message: 'El usuario no esta registrado. Revisa tus credenciales.',
      })
    }
  }

  return (
    <div className="Login">
      <div className="Login__form">
        <div className="Form__logo">
          <Link to="/">
            <img src={logoIcon} alt="" />
          </Link>
        </div>
        <h2>¡Hola de nuevo!</h2>
        <p>Es un gusto volver a verte. Ingresa tus datos.</p>
        <form onSubmit={handleSubmit}>
          <div className="InputsGroup">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Escribe tu correo"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="InputsGroup">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Escribe tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="ErrorMessage"> {error.message}</p>}
          <button type="submit" className="btnStandard btnDark">
            Iniciar Sesión
          </button>
          <p className="MessageForm">
            ¿No tienes cuenta?{' '}
            <Link to="/formulario/register">Creala ahora mismo</Link>
          </p>
        </form>
      </div>
      <div className="Login__image">
        <img
          src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt=""
        />
      </div>
    </div>
  )
}

export default Login
