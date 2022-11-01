import React, { useEffect, useState } from 'react'
import { CoverGreetings } from '../../../components/Utils/Utils'
import { useLocation, useParams } from 'react-router-dom'
import {
  Input,
  Select,
  Radio,
  Label,
  Button,
  colorSchema,
} from '../../../components'

import { RadioGroup } from '../../../contexts'

const UsersForm = () => {
  const location = useLocation()
  const { id } = useParams()
  const [informativeMessages, setInformativeMessages] = useState({
    greetings: '',
    btnSubmitMessage: '',
  })
  // const [typeOfForm, setTypeOfForm] = useState("");
  const [inputs, setInputs] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmpassword: '',
    usertype: '',
    userstate: false,
  })
  const [inputError, setInputError] = useState({ error: false, message: '' })

  useEffect(() => {
    if (location.pathname.includes('/añadir')) {
      console.log('add new element')
      // setTypeOfForm('ADD')
      setInformativeMessages({
        greetings: 'Crear nuevo usuario',
        btnSubmitMessage: 'Crear nuevo usuario',
      })
    } else {
      console.log('update new element')
      console.log('email', id)
      // setTypeOfForm('UPDATE')
      setInformativeMessages({
        greetings: 'Actualizar usuario',
        btnSubmitMessage: 'Actualizar usuario',
      })
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('inputs', inputs)

    if (inputs.confirmpassword.toLowerCase() !== inputs.password.toLowerCase())
      return setInputError({
        error: true,
        message: 'Las contraseñas no coinciden.',
      })
    setInputError({ error: false, message: '' })
  }

  const typesOfUsers = [
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
          <Label htmlFor="fullname">Nombre</Label>
          <Input
            required
            type="text"
            id="fullname"
            placeholder="Escribe el nombre del usuario"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                fullname: e.target.value,
              }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="email">Email</Label>
          <Input
            required
            type="email"
            id="email"
            placeholder="Escribe el email del usuario"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="password">Contraseña</Label>
          <Input
            required
            type="password"
            id="password"
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
            required
            type="password"
            placeholder="Escribe de nuevo la contraseña del usuario"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                confirmpassword: e.target.value,
              }))
            }
          />
        </div>
        <div className="InputsGroup__grid">
          <div className="InputsGroup">
            <Label htmlFor="usertype">Tipo de usuario</Label>
            <Select
              required
              id="usertype"
              placeholder="Seleccionar tipo de usuario"
              name="select"
              options={typesOfUsers}
              onChange={(e) =>
                setInputs((prevState) => ({
                  ...prevState,
                  usertype: e.id,
                }))
              }
            />
          </div>

          <div className="InputsGroup">
            <Label htmlFor="userstate">Estado del usuario</Label>
            <RadioGroup
              name="userstate"
              id="userstate"
              value={inputs.userstate}
              onChange={(e) =>
                setInputs((prevState) => ({
                  ...prevState,
                  userstate: !inputs.userstate,
                }))
              }
            >
              <Radio value={1}>Activado</Radio>
              <Radio value={2}>Desactivado</Radio>
            </RadioGroup>
          </div>
        </div>
        {inputError.error && (
          <p className="ErrorMessage"> {inputError.message}</p>
        )}

        <Button type="submit" color={colorSchema.black}>
          {informativeMessages.btnSubmitMessage}
        </Button>
      </form>
    </div>
  )
}

export default UsersForm
