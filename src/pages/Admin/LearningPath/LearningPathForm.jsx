import React, { useEffect, useState } from 'react'
import { CoverGreetings } from '../../../components/Utils/Utils'
import { useLocation, useParams } from 'react-router-dom'
import { Input } from '../../../components/Input'
import { Button, colorSchema } from '../../../components/Button'
import { Label } from '../../../components/Label'

const LearningPathForm = () => {
  const location = useLocation()
  const { id } = useParams()
  const [inputError, setInputError] = useState({ error: false, message: '' })
  const [informativeMessages, setInformativeMessages] = useState({
    greetings: '',
    btnSubmitMessage: '',
  })

  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    link: '',
    imagen: false,
  })

  useEffect(() => {
    if (location.pathname.includes('/añadir')) {
      console.log('add new element')
      // setTypeOfForm('ADD')
      setInformativeMessages({
        greetings: 'Crear nueva Ruta de Aprendizaje',
        btnSubmitMessage: 'Crear nueva ruta',
      })
    } else {
      console.log('update new element')
      console.log('email', id)
      // setTypeOfForm('UPDATE')
      setInformativeMessages({
        greetings: 'Actualización de la Ruta de Aprendizaje',
        btnSubmitMessage: 'Actualizar ruta',
      })
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('inputs', inputs)

    setInputError({ error: true, message: '' })
  }

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={informativeMessages.greetings} isHome={false} />
      <form onSubmit={handleSubmit} className="FormContaner">
        <div className="InputsGroup">
          <Label htmlFor="name">Nombre de la ruta</Label>
          <Input
            required
            type="text"
            id="name"
            placeholder="Escribe el nombre de la ruta"
            onChange={(e) =>
              setInputs((prevState) => ({ ...prevState, name: e.target.value }))
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
          <Label htmlFor="link">Link</Label>
          <Input
            required
            type="text"
            id="link"
            placeholder="Escribe el link hacia donde se redireccionará la ruta"
            onChange={(e) =>
              setInputs((prevState) => ({ ...prevState, link: e.target.value }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="imagen">Imagen</Label>
          <Input
            required
            id="imagen"
            type="text"
            placeholder="Escribe el link de la imagen"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                imagen: e.target.value,
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

export default LearningPathForm
