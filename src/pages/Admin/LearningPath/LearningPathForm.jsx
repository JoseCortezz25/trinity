import React, { useEffect, useState } from 'react'
import { CoverGreetings } from '../../../components/Utils/Utils'
import { useLocation, useParams } from 'react-router-dom'
import { Input } from '../../../components/Input'
import { Button, colorSchema } from '../../../components/Button'
import { Label } from '../../../components/Label'

const LearningPathForm = () => {
  const location = useLocation()
  const { id } = useParams()  
  const [typeOfForm, setTypeOfForm] = useState('')
  const [error, setError] = useState({ error: false, message: '' })
  const [informativeMessages, setInformativeMessages] = useState({
    greetings: '',
    btnSubmitMessage: '',
  })

  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    link: '',
    imagen: '',
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
      setInformativeMessages({
        greetings: 'Actualización de la Ruta de Aprendizaje',
        btnSubmitMessage: 'Actualizar ruta',
      })
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('inputs', inputs)
    
    const { title, description, link, imagen } = inputs

    if (typeOfForm === 'ADD') {
      if (
        title === '' ||
        description === '' ||
        link === '' ||
        imagen === ''
      ) {
        return setError({
          error: true,
          message:
            'Hay campos vacios. Asegurate de completar todos los campos.',
        })
      }
      setError({ error: true, message: '' })
    }

    // if (typeOfForm === 'UPDATE') {
      
    // }
    
  }

  const handleImage = (e) => {
    console.log('e', e)
    const allowedMimes = [
      'image/png', 
      'image/jpg', 
      'image/gif', 
      'image/jpeg'
    ]

    
    if (allowedMimes.includes(e.type)) {
      setInputs({...inputs, imagen: e})
      setError({error: false, message: ''})
    } else {
      window.document.getElementById('input-file').value = ''
      setInputs({...inputs, imagen: e})
      setError({message: 'Invalid file type!. Only allowed jpeg, jpg and png', error: false})
    }
  }

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={informativeMessages.greetings} isHome={false} />
      <form onSubmit={handleSubmit} className="FormContaner">
        <div className="InputsGroup">
          <Label htmlFor="name">Nombre de la ruta</Label>
          <Input
            id="name"
            type="text"
            placeholder="Escribe el nombre de la ruta"
            onChange={(e) =>
              setInputs((prevState) => ({ ...prevState, name: e.target.value }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="description">Descripción</Label>
          <Input
            id="description"
            type="text"
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
            id="link"
            type="text"
            placeholder="Escribe el link hacia donde se redireccionará la ruta"
            onChange={(e) =>
              setInputs((prevState) => ({ ...prevState, link: e.target.value }))
            }
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="imagen">Selecciona la imagen de la cabecera</Label>
          <Input
            id="input-file"
            type="file"
            name="imagen"
            className="custom-file-input"
            accept="image/png, image/jpg, image/gif, image/jpeg"
            onChange={({ target }) => handleImage(target.files[0])}
          />

        </div>

        {error.error && (
          <p className="ErrorMessage"> {error.message}</p>
        )}

        <Button type="submit" color={colorSchema.black}>
          {informativeMessages.btnSubmitMessage}
        </Button>
      </form>
    </div>
  )
}

export default LearningPathForm
