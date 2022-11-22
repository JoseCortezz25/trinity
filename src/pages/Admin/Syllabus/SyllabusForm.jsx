/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { CoverGreetings } from '../../../components/Utils/Utils'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { Input } from '../../../components/Input'
import { Button, colorSchema } from '../../../components/Button'
import { Label } from '../../../components/Label'
import { Select } from '../../../components/Select'
import {
  createSyllabus,
  getAllLearningPaths,
  getAllLevels,
  getSyllabus,
  updateSyllabus,
} from '../../../services/service'
import { getToken } from '../../../services/localStorage'

const SyllabusForm = () => {
  const location = useLocation()
  const { id } = useParams()
  const navigate = useNavigate()
  const [error, setError] = useState({ error: false, message: '' })
  const [typeOfForm, setTypeOfForm] = useState('')
  const [syllabus, setSyllabus] = useState({})
  const [listOfLearningPaths, setListOfLearningPaths] = useState([{}])
  const [listOfLevels, setListOfLevels] = useState([{}])
  const [informativeMessages, setInformativeMessages] = useState({
    greetings: '',
    btnSubmitMessage: '',
  })

  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    level: '',
    learning_path: '',
  })

  useEffect(() => {
    getAllLearningPaths(getToken())
      .then((res) => {
        setListOfLearningPaths(
          res.data.data.map(({ id, attributes: { title } }) => {
            return { id, label: title }
          })
        )
      })
      .catch((error) => {
        return setError({
          error: error.error,
          message: error.message,
        })
      })

    getAllLevels(getToken())
      .then((res) => {
        setListOfLevels(
          res.data.map(({ id, attributes: { title } }) => {
            return { id, label: title }
          })
        )
      })
      .catch((error) => {
        return setError({
          error: error.error,
          message: error.message,
        })
      })

    if (location.pathname.includes('/añadir')) {
      setTypeOfForm('ADD')
      setInformativeMessages({
        greetings: 'Crear nuevo tema',
        btnSubmitMessage: 'Crear tema',
      })
    } else {
      setTypeOfForm('UPDATE')
      getSyllabus(id, getToken())
        .then((res) => {
          setSyllabus(res.data.data.attributes)
        })
        .catch((error) => {
          console.log(error)
        })

      setInformativeMessages({
        greetings: 'Actualizar tema',
        btnSubmitMessage: 'Actualizar tema',
      })
    }
  }, [location])

  const modifySyllabus = (syllabus) => {
    updateSyllabus(id, { data: syllabus }, getToken())
      .then((res) => {
        console.log('✨res', res)
      })
      .catch((error) => {
        setError({
          error: error.error,
          message:
            'Ha ocurrido un error. No es tu culpa, estamos solucionandolo.',
        })
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, description, level, learning_path } = inputs
    // console.log('inputs', inputs)
    setError({ error: true, message: '' })

    if (typeOfForm === 'ADD') {
      if (title === '' || description === '' || !level || !learning_path) {
        return setError({
          error: true,
          message:
            'Hay campos vacios. Asegurate de completar todos los campos.',
        })
      }
      setError({ error: false, message: '' })

      createSyllabus(
        { data: { title, description, level, learning_path } },
        getToken()
      )
      navigate('/admin/temario')
    }

    if (typeOfForm === 'UPDATE') {
      const formData = {}
      formData.title = inputs.title ? inputs.title : syllabus.title
      formData.description = inputs.description
        ? inputs.description
        : syllabus.description
      formData.level = inputs.level ? inputs.level : syllabus.level?.data.id
      formData.learning_path = inputs.learning_path
        ? inputs.learning_path
        : syllabus.learning_path?.data?.id
      modifySyllabus(formData)
      navigate('/admin/temario')
    }
  }

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={informativeMessages.greetings} isHome={false} />
      <form onSubmit={handleSubmit} className="FormContaner">
        <div className="InputsGroup">
          <Label htmlFor="title">Nombre del tema</Label>
          <Input
            id="title"
            type="text"
            name="title"
            value={inputs.title ? inputs.title : syllabus.title}
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
            name="description"
            value={
              inputs.description ? inputs.description : syllabus.description
            }
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
          <Label htmlFor="level">Nivel</Label>
          <Select
            id="level"
            name="level"
            placeholder={
              syllabus?.level?.data?.attributes?.title
                ? `${syllabus?.level?.data?.attributes?.title}`
                : `Seleccionar el nivel perteneciente al tema`
            }
            options={listOfLevels}
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                level: parseInt(e.id),
              }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="learning_path">Ruta de aprendizaje</Label>
          <Select
            id="learning_path"
            name="learning_path"
            placeholder={
              syllabus?.learning_path?.data.attributes?.title
                ? `${syllabus?.learning_path?.data.attributes?.title}`
                : `Seleccionar la ruta de aprendizaje a la que pertenece el tema`
            }
            options={listOfLearningPaths}
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                learning_path: parseInt(e.id),
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
