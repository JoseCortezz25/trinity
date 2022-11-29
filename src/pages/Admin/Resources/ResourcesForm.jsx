import React, { useEffect, useState } from 'react'
import { CoverGreetings } from '../../../components/Utils/Utils'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { Input } from '../../../components/Input'
import { Button, colorSchema } from '../../../components/Button'
import { Label } from '../../../components/Label'
import { Select } from '../../../components/Select'
import { validURL } from '../../../helpers/utils'
import {
  addRecommendations,
  getRecommendation,
  updateRecommendation,
} from '../../../services/service'
import { getToken } from '../../../services/localStorage'
import { GENERIC_ERROR_MESSAGE, WRONG_URL_MESSAGE, INCOMPLETE_INPUTS } from '../../../helpers/messages'

const ResourcesForm = () => {
  const location = useLocation()
  const { id } = useParams()
  const [error, setError] = useState({ error: false, message: '' })
  const [resource, setResource] = useState({})
  const navigate = useNavigate()
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
    }
    if (location.pathname.includes('/actualizar')) {
      setTypeOfForm('UPDATE')
      getRecommendation(id, getToken())
        .then((res) => {
          setResource(res.data.attributes)
        })
        .catch((error) => {
          setError({
            error: error.error,
            message: error.message,
          })
        })
      setInformativeMessages({
        greetings: 'Actualizar recurso recomendado',
        btnSubmitMessage: 'Actualizar recurso',
      })
    }
  }, [location])

  const modifyResource = (resource) => {
    updateRecommendation(id, { data: resource }, getToken())
      .then((res) => {
        console.log('✨res', res)
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
      const { title, link, type } = inputs

      if (typeOfForm === 'ADD') {
        if (title === '' || link === '' || type === '') {
          return setError({
            error: true,
            message: INCOMPLETE_INPUTS
          })
        }
        if (!validURL(inputs.link)) {
          return setError({
            error: true,
            message: WRONG_URL_MESSAGE,
          })
        }
        setError({ error: false, message: '' })


        addRecommendations({ data: { title, link, type } }, getToken())
        navigate('/admin/recursos')
      }

      if (typeOfForm === 'UPDATE') {
        const formData = {}
        formData.title = inputs.title ? inputs.title : resource.title
        formData.link = inputs.link ? inputs.link : resource.link
        formData.type = inputs.type ? inputs.type : resource.type
        modifyResource(formData)
        navigate('/admin/recursos')
      }
    } catch (error) {
      setError({ error: error.error, message: error.message })
    }
  }

  const typeOfResources = [
    {
      label: 'Página web',
      id: 'WEB',
    },
    {
      label: 'Youtube',
      id: 'YOUTUBE',
    },
    {
      label: 'Curso',
      id: 'CURSO',
    },
  ]

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={informativeMessages.greetings} isHome={false} />
      <form onSubmit={handleSubmit} className="FormContaner">
        <div className="InputsGroup">
          <Label htmlFor="title">Titulo del recurso</Label>
          <Input
            id="title"
            type="text"
            value={inputs.title ? inputs.title : resource.title}
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
            name="select"
            placeholder={
              inputs.type ? inputs.type : 'Seleccionar tipo de recursos'
            }
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
            id="link"
            name="link"
            type="text"
            value={inputs.link ? inputs.link : resource.link}
            placeholder="Escribe el nombre de la ruta"
            onChange={({ target: { value, name } }) =>
              setInputs({ ...inputs, [name]: value })
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
