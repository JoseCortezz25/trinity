import React, { useEffect, useState } from 'react'
import { CoverGreetings } from '../../../components/Utils/Utils'
import { useLocation, useParams } from 'react-router-dom'
import { Input } from '../../../components/Input'
import { Button, colorSchema } from '../../../components/Button'
import { Label } from '../../../components/Label'
import { Select } from '../../../components/Select'

const ResourcesForm = () => {
  const location = useLocation()
  const { id } = useParams()
  const [inputError, setInputError] = useState({ error: false, message: '' })
  const [informativeMessages, setInformativeMessages] = useState({
    greetings: '',
    btnSubmitMessage: '',
  })

  const [inputs, setInputs] = useState({
    title: '',
    resourcetype: '',
    link: '',
  })

  useEffect(() => {
    if (location.pathname.includes('/añadir')) {
      setInformativeMessages({
        greetings: 'Añadir nuevo recurso recomendado',
        btnSubmitMessage: 'Añadir recurso',
      })
    } else {
      console.log('email', id)
      setInformativeMessages({
        greetings: 'Actualizar recurso recomendado',
        btnSubmitMessage: 'Actualizar recurso',
      })
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('inputs', inputs)

    setInputError({ error: true, message: '' })
  }

  const typeOfResources = [
    {
      label: 'Página web',
      id: 'Página web',
    },
    {
      label: 'Youtube',
      id: 'Youtube',
    },
    {
      label: 'Curso',
      id: 'Curso',
    },
  ]

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={informativeMessages.greetings} isHome={false} />
      <form onSubmit={handleSubmit} className="FormContaner">
        <div className="InputsGroup">
          <Label htmlFor="title">Titulo del recurso</Label>
          <Input
            required
            type="text"
            id="title"
            placeholder="Escribe el titulo del recurso"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="resourcetype">Tipo del recursos</Label>
          <Select
            required
            id="resourcetype"
            placeholder="Seleccionar tipo de recursos"
            name="select"
            options={typeOfResources}
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                resourcetype: e.id,
              }))
            }
          ></Select>
        </div>

        <div className="InputsGroup">
          <Label htmlFor="link">Link</Label>
          <Input
            required
            type="text"
            id="link"
            placeholder="Escribe el nombre de la ruta"
            onChange={(e) =>
              setInputs((prevState) => ({ ...prevState, link: e.target.value }))
            }
          />
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

export default ResourcesForm
