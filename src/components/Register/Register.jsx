import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { registerAccount } from '../../services/service'
import { logoIcon } from '../../assets'
import { generateRandomUsername } from '../../services/utils'
import { Input, Label } from '../../components'
import './Register.css'

const Register = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [error, setError] = useState({ error: false, message: '' })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmpassword) {
      return setError({
        error: true,
        message: 'Las contraseñas no son iguales',
      })
    } else {
      setError({ error: false, message: '' })
    }
    const username = generateRandomUsername(fullName)

    registerAccount({ fullName, email, password, username })
      .then((res) => {
        console.log(res);
        if (res.error)
          return setError({ error: res.error, message: res.message })
        setFullName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        navigate('/formulario/login')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="Register">
      <div className="Register__form">
        <div className="Form__logo">
          <Link to="/">
            <img src={logoIcon} alt="" />
          </Link>
        </div>
        <h2>Crear una nueva cuenta</h2>
        <p>Bienvenido a la familia. Ingresa los datos para crear la cuenta.</p>

        <form onSubmit={handleSubmit}>
          <div className="InputsGroup">
            <Label htmlFor="fullName">Nombre</Label>
            <Input
              minLength="8"
              type="text"
              name="fullName"
              placeholder="Escribe tu nombre"
              required
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="InputsGroup">
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              name="email"
              placeholder="Escribe tu correo"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="InputsGroup">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              minLength="8"
              type="password"
              name="password"
              placeholder="Escribe tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="InputsGroup">
            <Label htmlFor="confirmpassword">Confirmar contraseña</Label>
            <Input
              minLength="8"
              type="password"
              name="confirmpassword"
              placeholder="Escribe de nuevo tu contraseña"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="ErrorMessage"> {error.message}</p>}
          <button type="submit" className="btnStandard btnDark">
            Crear cuenta
          </button>
          <p className="MessageForm">
            ¿Ya tienes cuenta?{' '}
            <Link to="/formulario/login">Inicia sesión ahora</Link>
          </p>
        </form>
      </div>
      <div className="Register__image">
        <img
          src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
    </div>
  )
}

export default Register
