import React, { useEffect, useState } from 'react'
import { CoverGreetings } from '../../../components/Utils/Utils'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { Input } from '../../../components/Input'
import { Button, colorSchema } from '../../../components/Button'
import { Label } from '../../../components/Label'
import {
  createLearningPath,
  deleteFile,
  getLearningPath,
  updateLearningPath,
  uploadFile,
} from '../../../services/service'
import {
  GENERIC_ERROR_MESSAGE,
  INCOMPLETE_INPUTS,
  WRONG_IMAGE_FORMAT,
} from '../../../helpers/messages'
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
    image: null,
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
          message: GENERIC_ERROR_MESSAGE,
        })
      })
  }

  const handleSubmit = (e) => {
    try {
      e.preventDefault()
      const { title, description, image } = inputs

      if (typeOfForm === 'ADD') {
        if (title === '' || description === '' || !image) {
          return setError({
            error: true,
            message: INCOMPLETE_INPUTS,
          })
        }
        setError({ error: true, message: '' })

        const formData = new FormData()
        formData.append('files', image, image.name)

        uploadFile(formData, getToken())
          .then(({ data }) => {
            const thumbnail = data[0].formats.thumbnail.url
            const image = data[0].url
            return createLearningPath(
              {
                title,
                description,
                image,
                thumbnail,
                imageId: data[0].id,
              },
              getToken()
            )
          })
          .then(({ data }) => {
            navigate('/admin/rutas')
          })
          .catch((error) => {
            setError({
              error: error.error,
              message: error.message,
            })
          })
        // createLearningPath(inputs, getToken())
        // navigate('/admin/rutas')
      }

      if (typeOfForm === 'UPDATE') {
        const formData = {}
        formData.title = inputs.title ? inputs.title : learningPath.title
        formData.description = inputs.description
          ? inputs.description
          : learningPath.description

        if (inputs.image) {
          const formDataFile = new FormData()
          formDataFile.append('files', image, image.name)
          deleteFile(learningPath.imageId, getToken())
          uploadFile(formDataFile, getToken())
            .then(({ data }) => {
              const thumbnail = data[0].formats.thumbnail.url
              const image = data[0].url
              return modifyLearningPath(
                {
                  fullName: formData.fullName,
                  description: formData.description,
                  image,
                  thumbnail,
                  imageId: data[0].id,
                },
                getToken()
              )
            })
            .then(({ data }) => {
              navigate('/admin/rutas')
            })
            .catch((error) => {
              setError({
                error: error.error,
                message: error.message,
              })
            })
            navigate('/admin/rutas')
        } else {
          modifyLearningPath(formData)
          navigate('/admin/rutas')
        }
      }
    } catch (error) {
      setError({ error: error.error, message: error.message })
    }
  }

  const handleImage = (e) => {
    const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png']
    if (allowedMimes.includes(e.type)) {
      setInputs((prevState) => ({
        ...prevState,
        image: e,
      }))
      setError({ error: false, message: '' })
    } else {
      window.document.getElementById('input-file').value = ''
      setInputs((prevState) => ({
        ...prevState,
        image: '',
      }))
      return setError({
        error: true,
        message: WRONG_IMAGE_FORMAT,
      })
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
            name="description"
            value={
              inputs.description ? inputs.description : learningPath.description
            }
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
          <Label htmlFor="image">Sube la imagen principal para la ruta</Label>
          <Input
            id="input-file"
            name="image"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            placeholder="Adjunta el link de la imagen"
            onChange={({ target }) => handleImage(target.files[0])}
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
