import React, { useEffect, useState } from 'react'
import { CoverGreetings } from '../../../components/Utils/Utils'
import { useLocation, useParams } from 'react-router-dom'
import { Input } from '../../../components/Input'
import { Button, colorSchema } from '../../../components/Button'
import { Label } from '../../../components/Label'
import { Select } from '../../../components/Select'

const SyllabusForm = () => {
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
    description: '',
    level: '',
    learningpath: '',
  })

  useEffect(() => {
    if (location.pathname.includes('/añadir')) {
      setTypeOfForm('ADD')
      setInformativeMessages({
        greetings: 'Crear nuevo tema',
        btnSubmitMessage: 'Crear tema',
      })
    } else {
      setTypeOfForm('UPDATE')
      setInformativeMessages({
        greetings: 'Actualizar tema',
        btnSubmitMessage: 'Actualizar tema',
      })
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, description, level, learningpath } = inputs
    console.log('inputs', inputs)
    setError({ error: true, message: '' })

    if (typeOfForm === 'ADD') {
      if (
        title === '' ||
        description === '' ||
        level === '' ||
        learningpath === ''
      ) {
        return setError({
          error: true,
          message:
            'Hay campos vacios. Asegurate de completar todos los campos.',
        })
      }
      setError({ error: false, message: '' })
    }

    if (typeOfForm === 'UPDATE') {

      const formData = {}
      // formData.title = inputs.title ? inputs.title : syllabus.title
      // formData.description = inputs.description ? inputs.description : syllabus.description
      // formData.level = inputs.level ? inputs.level : syllabus.level
      // formData.learningpath = inputs.learningpath ? inputs.learningpath : syllabus.learningpath
    }
  }

  const learningPaths = [
    {
      label: 'Ruta Frontned',
      id: 'RutaFrontned',
    },
    {
      label: 'Ruta Backend',
      id: 'RutaBackend',
    },
    {
      label: 'Ruta Complemento',
      id: 'RutaComplemento',
    },
  ]

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

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={informativeMessages.greetings} isHome={false} />
      <form onSubmit={handleSubmit} className="FormContaner">
        <div className="InputsGroup">
          <Label htmlFor="title">Nombre del tema</Label>
          <Input
            id="title"
            type="text"
            placeholder="Escribe el nombre del tema"
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
            placeholder="Escribe la descripción del tema"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          />
        </div>

        <div className="InputsGroup">
        <Label htmlFor="learningpath">Nivel</Label>
          <Select
            id="learningpath"
            name="learningpath"
            placeholder="Seleccionar el nivel perteneciente al tema"
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
          <Label htmlFor="learningpath">Ruta de aprendizaje</Label>
          <Select
            id="learningpath"
            name="learningpath"
            placeholder="Seleccionar la ruta de aprendizaje a la que pertenece el tema"
            options={learningPaths}
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                learningpath: e.id,
              }))
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

export default SyllabusForm
