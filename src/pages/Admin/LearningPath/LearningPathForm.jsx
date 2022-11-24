import React, { useEffect, useState } from 'react'
import { CoverGreetings } from '../../../components/Utils/Utils'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { Input } from '../../../components/Input'
import { Button, colorSchema } from '../../../components/Button'
import { Label } from '../../../components/Label'
import {
  createLearningPath,
  getLearningPath,
  updateLearningPath,
} from '../../../services/service'
import { GENERIC_ERROR_MESSAGE, INCOMPLETE_INPUTS } from '../../../helpers/messages'
import { getToken } from '../../../services/localStorage'

const LearningPathForm = () => {
  const location = useLocation()
  const { id } = useParams()
  const navigate = useNavigate()
  const [learningPath, setLearningPath] = useState({})
  const [typeOfForm, setTypeOfForm] = useState('')
  const [error, setError] = useState({ error: false, message: '' })
  const [informativeMessages, setInformativeMessages] = useState({
    greetings: '',
    btnSubmitMessage: '',
  })

  const [inputs, setInputs] = useState({
    title: '',
    description: '',
  })

  useEffect(() => {
    if (location.pathname.includes('/añadir')) {
      setTypeOfForm('ADD')
      setInformativeMessages({
        greetings: 'Crear nueva Ruta de Aprendizaje',
        btnSubmitMessage: 'Crear nueva ruta',
      })
    } else {
      setTypeOfForm('UPDATE')
      getLearningPath(id, getToken())
        .then((res) => {
          console.log(res.data.data.attributes)
          setLearningPath(res.data.data.attributes)
        })
        .catch((error) => {
          setError({
            error: error.error,
            message: error.message,
          })
        })
      setInformativeMessages({
        greetings: 'Actualización de la Ruta de Aprendizaje',
        btnSubmitMessage: 'Actualizar ruta',
      })
    }
  }, [location])

  const modifyLearningPath = (learninPath) => {
    updateLearningPath(id, { data: learninPath }, getToken())
      .then((res) => {
        console.log('Updated it :)')
      })
      .catch((error) => {
        setError({
          error: error.error,
          message: GENERIC_ERROR_MESSAGE
        })
      })
  }

  const handleSubmit = (e) => {
    try {
      e.preventDefault()
      const { title, description } = inputs

      if (typeOfForm === 'ADD') {
        if (title === '' || description === '') {
          return setError({
            error: true,
            message: INCOMPLETE_INPUTS
          })
        }
        setError({ error: true, message: '' })

        createLearningPath(inputs, getToken())
        navigate('/admin/rutas')
      }

      if (typeOfForm === 'UPDATE') {
        const formData = {}
        formData.title = inputs.title ? inputs.title : learningPath.title
        formData.description = inputs.description
          ? inputs.description
          : learningPath.description

        modifyLearningPath(formData)
        navigate('/admin/rutas')
      }
    } catch (error) {
      setError({ error: error.error, message: error.message })
    }
  }

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={informativeMessages.greetings} isHome={false} />
      <form onSubmit={handleSubmit} className="FormContaner">
        <div className="InputsGroup">
          <Label htmlFor="title">Nombre de la ruta</Label>
          <Input
            id="title"
            type="text"
            name="title"
            value={inputs.title ? inputs.title : learningPath.title}
            placeholder="Escribe el nombre de la ruta"
            onChange={(e) =>
              setInputs((prevState) => ({ ...prevState, title: e.target.value }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="description">Descripción</Label>
          <Input
            id="description"
            type="text"
            name="description"
            value={inputs.description ? inputs.description : learningPath.description}
            placeholder="Escribe la descripción de la ruta"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                description: e.target.value,
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

export default LearningPathForm
