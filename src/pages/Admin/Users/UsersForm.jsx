import React, { useEffect, useState } from 'react'
import { CoverGreetings } from '../../../components/Utils/Utils'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { generateRandomUsername } from '../../../helpers/utils'
import { RadioGroup } from '../../../contexts'
import { createNewUser, getUserById, updateUser } from '../../../services/service'
import { getCurrentUser, getToken, validateUser } from '../../../services/localStorage'
import {
  Input,
  Select,
  Radio,
  Label,
  Button,
  colorSchema,
} from '../../../components'

const UsersForm = () => {
  const location = useLocation()
  const { id } = useParams()
  const [error, setError] = useState({ error: false, message: '' })
  const [user, setUser] = useState({})
  const navigate = useNavigate()
  const [informativeMessages, setInformativeMessages] = useState({
    greetings: '',
    btnSubmitMessage: '',
  })
  const [typeOfForm, setTypeOfForm] = useState('')
  const [inputs, setInputs] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmpassword: '',
    role: '',
    status: '',
  })

  const createUser = (data) => {
    createNewUser(data, getToken())
      .then((res) => {
        console.log('🎃 res', res)
      })
      .catch((error) => {
        setError({
          error: error.error,
          message: error.message,
        })
      })
  }

  const modifyUser = (data) => {
    updateUser(id, data, getToken())
      .then((res) => {
        console.log('✨res', res)
      })
      .catch((error) => {
        setError({
          error: error.error,
          message:
            'Ha ocurrido un error. No es tu culpa, estamos solucionandolo.',
        })
      })
  }

  useEffect(() => {
    if (location.pathname.includes('/añadir')) {
      setTypeOfForm('ADD')
      setInformativeMessages({
        greetings: 'Crear nuevo usuario',
        btnSubmitMessage: 'Crear nuevo usuario',
      })
    } else {
      setTypeOfForm('UPDATE')
      getUserById(id, getToken())
        .then((res) => {
          res.role = 'ADMIN'
          setUser(res)
        })
        .catch((error) => {
          setError({
            error: error.error,
            message:
              'Ha ocurrido un error. No es tu culpa, estamos solucionandolo.',
          })
        })

      setInformativeMessages({
        greetings: 'Actualizar usuario',
        btnSubmitMessage: 'Actualizar usuario',
      })
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { fullName, email, password, confirmpassword, role, status } = inputs

    if (typeOfForm === 'ADD') {
      console.log('add')

      if (inputs.confirmpassword.toLowerCase() !== inputs.password.toLowerCase()) {
        return setError({
          error: true,
          message: 'Las contraseñas no coinciden.',
        })
      }
      setError({ error: false, message: '' })

      const username = generateRandomUsername(fullName)
      if (
        fullName === '' ||
        email === '' ||
        password === '' ||
        confirmpassword === '' ||
        role === '' ||
        status === ''
      ) {
        return setError({
          error: true,
          message:
            'Hay campos vacios. Asegurate de completar todos los campos.',
        })
      }

      setError({ error: false, message: '' })
      createUser({ fullName, email, password, role, status, username })
      navigate('/admin/usuarios')
    }

    if (typeOfForm === 'UPDATE') {

      if (inputs.confirmpassword.toLowerCase() !== inputs.password.toLowerCase()) {
        return setError({
          error: true,
          message: 'Las contraseñas no coinciden.',
        })
      }
      setError({ error: false, message: '' })

      const formData = {}
      formData.fullName = inputs.fullName ? inputs.fullName : user.fullName
      formData.email = inputs.email ? inputs.email : user.email
      formData.role = inputs.role ? inputs.role : user.role
      formData.status = inputs.status ? inputs.status : user.status

      console.log('formData', formData)

      modifyUser(formData)
      navigate('/admin/usuarios')
    }
  }

  const rolesOfUsers = [
    {
      label: 'Administrador',
      id: 'ADMIN',
    },
    {
      label: 'Usuario',
      id: 'USER',
    },
  ]

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={informativeMessages.greetings} isHome={false} />
      <form onSubmit={handleSubmit} className="FormContaner">
        <div className="InputsGroup">
          <Label htmlFor="fullName">Nombre</Label>
          <Input
            id="fullName"
            name="fullName"
            value={user.fullName}
            type="text"
            minLength="8"
            placeholder="Escribe el nombre del usuario"
            onChange={({ target: { value, name } }) =>
              setInputs({ ...inputs, [name]: value })
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            value={user.email}
            type="email"
            placeholder="Escribe el email del usuario"
            onChange={({ target: { value, name } }) =>
              setInputs({ ...inputs, [name]: value })
            }
          />
        </div>

        {typeOfForm === 'ADD' ? (
          <>
            <div className="InputsGroup">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                type="password"
                id="password"
                name="password"
                minLength="8"
                placeholder="Escribe la contraseña del usuario"
                onChange={(e) =>
                  setInputs((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
              />
            </div>

            <div className="InputsGroup">
              <Label htmlFor="confirmpassword">Confirmar contraseña</Label>
              <Input
                id="confirmpassword"
                type="password"
                name="password"
                minLength="8"
                placeholder="Escribe de nuevo la contraseña del usuario"
                onChange={(e) =>
                  setInputs((prevState) => ({
                    ...prevState,
                    confirmpassword: e.target.value,
                  }))
                }
              />
            </div>
          </>
        ) : null}

        <div className="InputsGroup__grid">
          <div className="InputsGroup">
            <Label htmlFor="role">Tipo de usuario</Label>
            <Select
              id="role"
              name="role"
              required
              placeholder={
                user.role ? `${user.role}` : `Seleccionar tipo de usuario`
              }
              options={rolesOfUsers}
              onChange={(e) =>
                setInputs((prevState) => ({
                  ...prevState,
                  role: e.id,
                }))
              }
            />
          </div>

          <div className="InputsGroup">
            <Label htmlFor="status">Estado del usuario</Label>
            <RadioGroup
              name="status"
              id="status"
              value={inputs.status ? inputs.status : user.status}
              onChange={(e) =>
                setInputs((prevState) => ({
                  ...prevState,
                  status: !inputs.status,
                }))
              }
            >
              <Radio value={1}>Activado</Radio>
              <Radio value={2}>Desactivado</Radio>
            </RadioGroup>
          </div>
        </div>
        {error.error && <p className="ErrorMessage"> {error.message}</p>}

        <Button type="submit" color={colorSchema.black} isDisabled={validateUser(id, getCurrentUser())}>
          {informativeMessages.btnSubmitMessage}
        </Button>
      </form>
    </div>
  )
}

export default UsersForm
