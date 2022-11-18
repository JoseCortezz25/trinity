import React, { useEffect, useState } from 'react'
import { CoverGreetings } from '../../../components/Utils/Utils'
import { useLocation, useParams } from 'react-router-dom'
import { Input } from '../../../components/Input'
import { Button, colorSchema } from '../../../components/Button'
import { Label } from '../../../components/Label'
import { Select } from '../../../components/Select'

const ContentForm = () => {
  const location = useLocation()
  const { id } = useParams()
  const [typeOfForm, setTypeOfForm] = useState('')
  const [error, setError] = useState({ error: false, message: '' })
  const [informativeMessages, setInformativeMessages] = useState({
    greetings: '',
    btnSubmitMessage: '',
  })

  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    link: '',
    temario: '',
    level: '',
  })

  useEffect(() => {
    if (location.pathname.includes('/añadir')) {
      setTypeOfForm('ADD')
      setInformativeMessages({
        greetings: 'Añadir contenido',
        btnSubmitMessage: 'Crear contenido',
      })
    } else {
      setTypeOfForm('UPDATE')
      setInformativeMessages({
        greetings: 'Actualizar contenido',
        btnSubmitMessage: 'Actualizar contenido',
      })
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('inputs', inputs)

    const { title, description, link, temario, level, importance } = inputs

    if (typeOfForm === 'ADD') {
      if (
        title === '' ||
        description === '' ||
        link === '' ||
        temario === '' ||
        level === '' ||
        importance === ''
      ) {
        return setError({
          error: true,
          message:
            'Hay campos vacios. Asegurate de completar todos los campos.',
        })
      }
      setError({ error: true, message: '' })
    }

    if (typeOfForm === 'UPDATE') {

      const formData = {}
      // formData.title = inputs.title ? inputs.title : contents.title
      // formData.description = inputs.description ? inputs.description : contents.description
      // formData.link = inputs.link ? inputs.link : contents.link
      // formData.temario = inputs.temario ? inputs.temario : contents.temario
      // formData.level = inputs.level ? inputs.level : contents.level
    }

  }

  const levels = [
    {
      label: 'Principiante',
      id: 'Principiante',
    },
    {
      label: 'Intermedio',
      id: 'Intermedio',
    },
    {
      label: 'Avanzado',
      id: 'Avanzado',
    },
  ]

  const temarios = [
    {
      label: 'CSS',
      id: 'CSS',
    },
    {
      label: 'HTML',
      id: 'HTML',
    },
    {
      label: 'JavaScript',
      id: 'JavaScript',
    },
  ]

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={informativeMessages.greetings} isHome={false} />
      <form onSubmit={handleSubmit} className="FormContaner">
        <div className="InputsGroup">
          <Label htmlFor="title">Título del contenido</Label>
          <Input
            id="title"
            type="text"
            placeholder="Escribe el título del contenido"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="description">Descripción</Label>
          <Input
            id="description"
            type="text"
            placeholder="Escribe la descripción de la ruta"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="link">URL del contenido</Label>
          <Input
            id="link"
            type="text"
            placeholder="Escribe el link donde se encuentra el contenido"
            onChange={(e) =>
              setInputs((prevState) => ({ ...prevState, link: e.target.value }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="temario">Temario</Label>
          <Select
            id="temario"
            name="temario"
            placeholder="Seleccionar el tema al que pertenece el contenido"
            options={temarios}
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                temario: e.id,
              }))
            }
          />
        </div>
        <div className="InputsGroup">
          <Label htmlFor="level">Nivel</Label>
          <Select
            id="level"
            name="level"
            placeholder="Seleccionar el nivel del tema"
            options={levels}
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                level: e.id,
              }))
            }
          />
        </div>

        {error.error && (
          <p className="ErrorMessage"> {error.message}</p>
        )}

        <Button type="submit" color={colorSchema.black}>
          {informativeMessages.btnSubmitMessage}
        </Button>
      </form>
    </div>
  )
}

export default ContentForm
