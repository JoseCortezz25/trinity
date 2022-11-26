/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

import { CoverGreetings } from '../../../components/Utils/Utils'
import { generateRandomUsername } from '../../../helpers/utils'
import { RadioGroup } from '../../../contexts'
import {
  createNewUser,
  getAllRoles,
  getUserById,
  updateUser,
} from '../../../services/service'
import {
  GENERIC_ERROR_MESSAGE,
  INCOMPLETE_INPUTS,
  PASSWORDS_ARE_NOT_THE_SAME,
} from '../../../helpers/messages'
import { getToken } from '../../../services/localStorage'
import {
  Input,
  Select,
  Radio,
  Label,
  Button,
  colorSchema,
} from '../../../components'
import {
  INITIAL_ERROR,
  INITIAL_INFORMATION_MESSAGES,
  INITIAL_INPUTS_USER_FORM,
} from '../../../models'

const UsersForm = () => {
  const location = useLocation()
  const { id } = useParams()
  const [roles, setRoles] = useState([])
  const [error, setError] = useState(INITIAL_ERROR)
  const [user, setUser] = useState({})
  const navigate = useNavigate()
  const [informativeMessages, setInformativeMessages] = useState(
    INITIAL_INFORMATION_MESSAGES
  )
  const [typeOfForm, setTypeOfForm] = useState('')
  const [inputs, setInputs] = useState(INITIAL_INPUTS_USER_FORM)

  const createUser = (data) => {
    createNewUser(data, getToken())
      .then(() => console.log('It was created! :)'))
      .catch((error) => {
        setError({
          error: error.error,
          message: error.message,
        })
      })
  }

  const handleChange = ({ target: { name, value } }) =>
    setInputs({ ...inputs, [name]: value })

  const handleChangeRadio = ({ name, value }) =>
    setInputs({ ...inputs, [name]: value })

  const modifyUser = (data) => {
    updateUser(id, data, getToken())
      .then((res) => console.log('✨res', res))
      .catch((error) => {
        setError({
          error: error.error,
          message: GENERIC_ERROR_MESSAGE,
        })
      })
  }

  useEffect(() => {
    getAllRoles(getToken())
      .then(({ data }) =>
        setRoles(
          data.map(({ id, attributes: { name } }) => ({ id, label: name }))
        )
      )
      .catch((error) => {
        setError({
          error: error.error,
          message: GENERIC_ERROR_MESSAGE,
        })
      })

    if (location.pathname.includes('/añadir')) {
      setTypeOfForm('ADD')
      setInformativeMessages({
        greetings: 'Crear nuevo usuario',
        btnSubmitMessage: 'Crear nuevo usuario',
      })
    } else {
      setTypeOfForm('UPDATE')
      getUserById(id, getToken())
        .then(({ role, status, ...res }) => {
          role = 'ADMIN'
          setInputs({ ...inputs, status: status ? 1 : 0 })
          setUser({ ...res, role, status: status ? 1 : 0 })
        })
        .catch((error) => {
          setError({
            error: error.error,
            message: GENERIC_ERROR_MESSAGE,
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
    const {
      fullName,
      email,
      password,
      confirmpassword,
      role,
      status,
      roles_trinity,
    } = inputs

    if (typeOfForm === 'ADD') {
      if (confirmpassword.toLowerCase() !== password.toLowerCase()) {
        return setError({
          error: true,
          message: PASSWORDS_ARE_NOT_THE_SAME,
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
        status === '' ||
        !roles_trinity
      ) {
        return setError({
          error: true,
          message: INCOMPLETE_INPUTS,
        })
      }

      setError({ error: false, message: '' })
      createUser({
        fullName,
        email,
        password,
        role,
        status: status === 1,
        username,
        roles_trinity,
      })
      navigate('/admin/usuarios')
    }

    if (typeOfForm === 'UPDATE') {
      if (confirmpassword.toLowerCase() !== password.toLowerCase()) {
        return setError({
          error: true,
          message: PASSWORDS_ARE_NOT_THE_SAME,
        })
      }
      setError({ error: false, message: '' })

      const formData = {}
      formData.fullName = inputs.fullName ? inputs.fullName : user.fullName
      formData.email = inputs.email ? inputs.email : user.email
      formData.role = inputs.role ? inputs.role : user.role
      formData.roles_trinity = inputs.roles_trinity
        ? inputs.roles_trinity
        : user.roles_trinity?.id
      formData.status = status === 1

      modifyUser(formData)
      navigate('/admin/usuarios')
    }
  }

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={informativeMessages.greetings} isHome={false} />
      <form onSubmit={handleSubmit} className="FormContaner">
        <div className="InputsGroup">
          <Label htmlFor="fullName">Nombre</Label>
          <Input
            id="fullName"
            name="fullName"
            value={user.fullName ?? inputs.fullName}
            type="text"
            minLength="8"
            placeholder="Escribe el nombre del usuario"
            onInput={handleChange}
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            value={user.email ?? inputs.email}
            type="email"
            placeholder="Escribe el email del usuario"
            onInput={handleChange}
          />
        </div>

        {typeOfForm === 'ADD' && (
          <>
            <div className="InputsGroup">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                type="password"
                id="password"
                name="password"
                minLength="8"
                placeholder="Escribe la contraseña del usuario"
                onInput={handleChange}
              />
            </div>
            <div className="InputsGroup">
              <Label htmlFor="confirmpassword">Confirmar contraseña</Label>
              <Input
                id="confirmpassword"
                type="password"
                name="confirmpassword"
                minLength="8"
                placeholder="Escribe de nuevo la contraseña del usuario"
                onInput={handleChange}
              />
            </div>
          </>
        )}
        <div className="InputsGroup__grid">
          <div className="InputsGroup">
            <Label htmlFor="roles_trinity">Tipo de usuario</Label>
            <Select
              id="roles_trinity"
              name="roles_trinity"
              placeholder={
                user.roles_trinity?.name
                  ? `${user.roles_trinity?.name}`
                  : `Seleccionar tipo de usuario`
              }
              options={roles}
              onChange={({ id }) =>
                setInputs({
                  ...inputs,
                  roles_trinity: parseInt(id),
                })
              }
            />
          </div>

          <div className="InputsGroup">
            <Label htmlFor="status">Estado del usuario</Label>
            <RadioGroup
              name="status"
              id="status"
              value={inputs.status}
              onChange={handleChangeRadio}
            >
              <Radio value={1}>Activado</Radio>
              <Radio value={0}>Desactivado</Radio>
            </RadioGroup>
          </div>
        </div>
        {error.error && <p className="ErrorMessage"> {error.message}</p>}

        <Button type="submit" color={colorSchema.black}>
          {informativeMessages.btnSubmitMessage}
        </Button>
      </form>
    </div>
  )
}

export default UsersForm
