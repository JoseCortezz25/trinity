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
  const [inputError, setInputError] = useState({ error: false, message: '' })
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
      setInformativeMessages({
        greetings: 'Crear nuevo tema',
        btnSubmitMessage: 'Crear tema',
      })
    } else {
      console.log('email', id)
      setInformativeMessages({
        greetings: 'Actualizar tema',
        btnSubmitMessage: 'Actualizar tema',
      })
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('inputs', inputs)

    setInputError({ error: true, message: '' })
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

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={informativeMessages.greetings} isHome={false} />
      <form onSubmit={handleSubmit} className="FormContaner">
        <div className="InputsGroup">
          <Label htmlFor="title">Nombre del tema</Label>
          <Input
            required
            type="text"
            id="title"
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
            required
            type="text"
            id="description"
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
          <Label htmlFor="description">Nivel</Label>
          <Input
            required
            type="text"
            id="level"
            placeholder="Escribe la descripción del tema"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                level: e.target.value,
              }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="learningpath">Ruta de aprendizaje</Label>
          <Select
            required
            name="learningpath"
            id="learningpath"
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

export default SyllabusForm
