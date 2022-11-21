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
  const [inputError, setInputError] = useState({ error: false, message: '' })
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
    importance: 0,
  })

  useEffect(() => {
    if (location.pathname.includes('/añadir')) {
      setInformativeMessages({
        greetings: 'Añadir contenido',
        btnSubmitMessage: 'Crear contenido',
      })
    } else {
      console.log('email', id)
      setInformativeMessages({
        greetings: 'Actualizar contenido',
        btnSubmitMessage: 'Actualizar contenido',
      })
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('inputs', inputs)

    setInputError({ error: true, message: '' })
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
            required
            type="text"
            id="title"
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
            required
            type="text"
            id="description"
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
            required
            type="text"
            id="link"
            placeholder="Escribe el link donde se encuentra el contenido"
            onChange={(e) =>
              setInputs((prevState) => ({ ...prevState, link: e.target.value }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="temario">Temario</Label>
          <Select
            required
            name="temario"
            id="temario"
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
            required
            name="level"
            id="level"
            placeholder="Seleccionar el nivel del tema escogido"
            options={levels}
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                level: e.id,
              }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="importance">Grado de importancia</Label>
          <p className="InputsGroup__sublabel">
            Escribe en numero el orden en el que se posicionará el contenido en
            la página.
          </p>
          <Input
            type="number"
            name="importance"
            id="importance"
            required
            placeholder="Ej: 1"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                importance: e.target.value,
              }))
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

export default ContentForm
