/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { CoverGreetings } from '../../../components/Utils/Utils'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { Input } from '../../../components/Input'
import { Button, colorSchema } from '../../../components/Button'
import { Label } from '../../../components/Label'
import { Select } from '../../../components/Select'
import {
  createContent,
  getAllSyllabus,
  getContent,
  updateContent,
} from '../../../services/service'
import { getToken } from '../../../services/localStorage'

const ContentForm = () => {
  const location = useLocation()
  const { id } = useParams()
  const navigate = useNavigate()
  const [typeOfForm, setTypeOfForm] = useState('')
  const [emptyTemario, setEmptyTemario] = useState(false)
  const [content, setContent] = useState({
    title: '',
    description: '',
    link: '',
    temario: 0,
    level: 0,
  })
  const [listOfSyllabus, setListOfSyllabus] = useState([{}])
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
    getAllSyllabus(getToken()).then((res) => {
      setListOfSyllabus(
        res.data.data.map(({ id, attributes: { title, level } }) => {
          const levelId = level.data.id
          const level_label = level.data.attributes.title
          return { id: [id, levelId], label: `${title} - ${level_label}` }
        })
      )
    })

    if (location.pathname.includes('/añadir')) {
      setTypeOfForm('ADD')
      setInformativeMessages({
        greetings: 'Añadir contenido',
        btnSubmitMessage: 'Crear contenido',
      })
    } else {
      setTypeOfForm('UPDATE')
      getContent(id, getToken()).then(({ data }) => {
        const contentResults = data.attributes
        setEmptyTemario(contentResults.temario.data === null)
        setContent({
          title: contentResults.title,
          description: contentResults.description,
          link: contentResults.link,
          level: contentResults.level.data.id,
          temario: contentResults.temario.data?.id,
        })
      })
      setInformativeMessages({
        greetings: 'Actualizar contenido',
        btnSubmitMessage: 'Actualizar contenido',
      })
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, description, link, temario, level } = inputs

    if (typeOfForm === 'ADD') {
      if (
        title === '' ||
        description === '' ||
        link === '' ||
        !temario ||
        !level
      ) {
        return setError({
          error: true,
          message:
            'Hay campos vacios. Asegurate de completar todos los campos.',
        })
      }
      setError({ error: true, message: '' })

      createContent(
        { data: { title, description, link, temario, level } },
        getToken()
      )
      navigate('/admin/contenidos')
    }

    if (typeOfForm === 'UPDATE') {
      const formData = {}
      formData.title = inputs.title ? inputs.title : content.title
      formData.description = inputs.description
        ? inputs.description
        : content.description
      formData.link = inputs.link ? inputs.link : content.link
      formData.level = inputs.level ? inputs.level : content.level

      if (emptyTemario && inputs.temario === '') {
        return setError({
          error: true,
          message:
            'Este elemento no tiene una ruta de aprendizaje asignada. Es necesario asignarsela.',
        })
      }
      setError({ error: false, message: '' })
      formData.temario = inputs.temario ? inputs.temario : content.temario
      updateContent(id, { data: formData }, getToken())
      navigate('/admin/contenidos')
    }
  }

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={informativeMessages.greetings} isHome={false} />
      <form onSubmit={handleSubmit} className="FormContaner">
        <div className="InputsGroup">
          <Label htmlFor="title">Título del contenido</Label>
          <Input
            id="title"
            type="text"
            name="title"
            value={inputs.title ? inputs.title : content.title}
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
            name="description"
            value={
              inputs.description ? inputs.description : content.description
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
          <Label htmlFor="link">URL del contenido</Label>
          <Input
            id="link"
            type="text"
            name="link"
            value={inputs.link ? inputs.link : content.link}
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
            placeholder="Seleccionar el temario al que pertenece el contenido"
            options={listOfSyllabus}
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                level: parseInt(e.id[2]),
                temario: parseInt(e.id[0]),
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

export default ContentForm
