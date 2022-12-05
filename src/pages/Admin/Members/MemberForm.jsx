import React, { useState, useEffect } from 'react'
import { Button, colorSchema } from '../../../components/Button/Button'
import { Input, Label } from '../../../components'
import { CoverGreetings } from '../../../components/Utils'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
  INCOMPLETE_INPUTS,
  WRONG_IMAGE_FORMAT,
} from '../../../helpers/messages'
import {
  createMember,
  deleteFile,
  getMember,
  updateMember,
  uploadFile,
} from '../../../services/service'
import { getToken } from '../../../services/localStorage'
import { generateRandomUrl } from '../../../helpers/utils'

const MemberForm = () => {
  const location = useLocation()
  const { id } = useParams()
  const navigate = useNavigate()
  const [error, setError] = useState({ error: false, message: '' })
  const [typeOfForm, setTypeOfForm] = useState('')
  const [member, setMember] = useState({
    fullName: '',
    description: '',
    url: '',
    image: null,
    thumbnail: '',
    imageId: 0,
  })
  const [inputs, setInputs] = useState({
    fullName: '',
    description: '',
    profile: null,
    url: '',
  })
  const [informativeMessages, setInformativeMessages] = useState({
    greetings: '',
    btnSubmitMessage: '',
  })

  useEffect(() => {
    if (location.pathname.includes('/añadir')) {
      setTypeOfForm('ADD')
      setInformativeMessages({
        greetings: 'Añadir nuevo miembro',
        btnSubmitMessage: 'Crear nuevo miembro',
      })
    } else {
      setTypeOfForm('UPDATE')
      getMember(id, getToken())
        .then(({ data: { data } }) => {
          setMember(data.attributes)
        })
        .catch((error) => {
          setError({
            error: error.error,
            message: error.message,
          })
        })
      setInformativeMessages({
        greetings: 'Actualizar miembro',
        btnSubmitMessage: 'Actualizar',
      })
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { fullName, description, profile } = inputs
    setError({ error: false, message: '' })

    if (typeOfForm === 'ADD') {
      if (fullName === '' || description === '' || !profile) {
        return setError({
          error: true,
          message: INCOMPLETE_INPUTS,
        })
      }
      setError({ error: false, message: '' })

      const formData = new FormData()
      formData.append('files', profile, profile.name)

      uploadFile(formData, getToken())
        .then(({ data }) => {
          const thumbnail = data[0].formats.thumbnail.url
          const image = data[0].url
          return createMember(
            {
              data: {
                fullName,
                description,
                url: generateRandomUrl(fullName),
                image,
                thumbnail,
                imageId: data[0].id,
              },
            },
            getToken()
          )
        })
        .then(({ data }) => {
          navigate('/admin/miembros')
        })
        .catch((error) => {
          setError({
            error: error.error,
            message: error.message,
          })
        })
    }

    if (typeOfForm === 'UPDATE') {
      const formData = {}
      formData.fullName = inputs.fullName ? inputs.fullName : member.fullName
      formData.description = inputs.description
        ? inputs.description
        : member.description

      if (inputs.profile) {
        const formDataFiles = new FormData()
        formDataFiles.append('files', profile, profile.name)
        deleteFile(member.imageId, getToken())
        uploadFile(formDataFiles, getToken())
          .then(({ data }) => {
            const thumbnail = data[0].formats.thumbnail.url
            const image = data[0].url
            return updateMember(
              id,
              {
                data: {
                  fullName: formData.fullName,
                  description: formData.description,
                  image,
                  thumbnail,
                  imageId: data[0].id,
                },
              },
              getToken()
            )
          })
          .then(({ data }) => {
            navigate('/admin/miembros')
          })
          .catch((error) => {
            setError({
              error: error.error,
              message: error.message,
            })
          })
      } else {
        updateMember(id, { data: formData }, getToken())
        navigate('/admin/miembros')
      }
    }
  }

  const handleImage = (e) => {
    console.log('Image', e)
    const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png']
    if (allowedMimes.includes(e.type)) {
      setInputs((prevState) => ({
        ...prevState,
        profile: e,
      }))
      setError({ error: false, message: '' })
    } else {
      window.document.getElementById('input-file').value = ''
      setInputs((prevState) => ({
        ...prevState,
        profile: '',
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
          <Label htmlFor="fullName">Nombre</Label>
          <Input
            id="fullName"
            name="fullName"
            value={inputs.fullName ? inputs.fullName : member.fullName}
            type="text"
            minLength="8"
            placeholder="Escribe el nombre del usuario"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                fullName: e.target.value,
              }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="description">Descripción</Label>
          <Input
            id="description"
            name="description"
            value={inputs.description ? inputs.description : member.description}
            type="text"
            minLength="8"
            placeholder="Escribe la descripción del usuario"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="profile">Sube la imagen del miembro</Label>
          <Input
            id="input-file"
            name="profile"
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

export default MemberForm
