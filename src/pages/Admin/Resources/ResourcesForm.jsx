import React, { useEffect, useState } from 'react'
import { CoverGreetings } from '../../../components/Utils/Utils'
import { useLocation, useParams } from 'react-router-dom'
import { Input } from '../../../components/Input'
import { Button, colorSchema } from '../../../components/Button'
import { Label } from '../../../components/Label'
import { Select } from '../../../components/Select'
import { validURL } from '../../../helpers/utils'

const ResourcesForm = () => {
  const location = useLocation()
  const { id } = useParams()
  const [error, setError] = useState({ error: false, message: '' })
  const [typeOfForm, setTypeOfForm] = useState('')
  const [informativeMessages, setInformativeMessages] = useState({
    greetings: '',
    btnSubmitMessage: '',
  })

  const [inputs, setInputs] = useState({
    title: '',
    link: '',
    type: '',
  })

  useEffect(() => {
    if (location.pathname.includes('/añadir')) {
      setTypeOfForm('ADD')
      setInformativeMessages({
        greetings: 'Añadir nuevo recurso recomendado',
        btnSubmitMessage: 'Añadir recurso',
      })
    } else {
      setTypeOfForm('UPDATE')
      console.log('email', id)
      setInformativeMessages({
        greetings: 'Actualizar recurso recomendado',
        btnSubmitMessage: 'Actualizar recurso',
      })
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, link, type } = inputs

    console.log('inputs', inputs)

    // Validate values input
    if (!validURL(inputs.link)) {
      return setError({
        error: true,
        message: 'La URL de la imagen no corresponde a un formado veridico.',
      })
    }
    setError({ error: false, message: '' })

    if (typeOfForm === 'ADD') {
      if (title === '' || link === '' || type === '') {
        return setError({
          error: true,
          message:
            'Hay campos vacios. Asegurate de completar todos los campos.',
        })
      }
      setError({ error: false, message: '' })
    }
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
          <Label htmlFor="type">Tipo del recursos</Label>
          <Select
            id="type"
            placeholder="Seleccionar tipo de recursos"
            name="select"
            options={typeOfResources}
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                type: e.id,
              }))
            }
          ></Select>
        </div>

        <div className="InputsGroup">
          <Label htmlFor="link">Link</Label>
          <Input
            type="text"
            id="link"
            placeholder="Escribe el nombre de la ruta"
            onChange={(e) =>
              setInputs((prevState) => ({ ...prevState, link: e.target.value }))
            }
          />
        </div>

        {error.error && <p className="ErrorMessage"> {error.message}</p>}

        <Button type="submit" color={colorSchema.black}>
          {informativeMessages.btnSubmitMessage}
        </Button>
      </form>
    </div>
  )
}

export default ResourcesForm
