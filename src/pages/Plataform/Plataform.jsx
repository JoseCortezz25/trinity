import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  getAllRecommendations,
  getAllLearningPaths,
} from '../../services/service'
import { getToken } from '../../services/localStorage'
import { Loader } from '../../components/Utils'
import YoutubeIcon from '../../assets/images/youTube.png'
import WebIcon from '../../assets/images/Web.png'
import './Plataform.css'

const Plataform = () => {
  const [learningPaths, setLearningPaths] = useState([{}])
  const [listOfRecommendations, setListOfRecommendations] = useState([{}])

  useEffect(() => {
    getAllLearningPaths(getToken()).then((data) => {
      setLearningPaths(data.data.data)
    })
    getAllRecommendations(getToken()).then((data) => {
      setListOfRecommendations(data.data.result)
    })
  }, [])

  return learningPaths && listOfRecommendations ? (
    <main className="Plataform">
      <h2 className="tittleh2">Rutas de aprendizaje</h2>
      <div className="Content_paths">
        {learningPaths.length > 0 ? (
          learningPaths?.map(({ id, attributes }) => (
            <CardPath
              image="https://images.unsplash.com/photo-1668881233694-1825a663b2a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              title={attributes?.title}
              key={attributes?.title}
              description={attributes?.description}
              link={`/aprender/${attributes?.title}?path=${id}`}
            />
          ))
        ) : (
          <p>no hay datos</p>
        )}
      </div>

      <h2 className="tittleh2">Recursos recomendados</h2>
      <div className="RecomemdedCards">
        {listOfRecommendations.length > 0 ? (
          listOfRecommendations?.map(({ id, attributes }) => (
            <Recomended
              title={attributes?.title}
              key={`${attributes?.title}${id}`}
              typeSite={attributes?.type}
              link={attributes?.link}
            />
          ))
        ) : (
          <p>no hay datos</p>
        )}
      </div>
    </main>
  ) : (
    <main className="LoaderBackground">
      <Loader />
    </main>
  )
}

const CardPath = ({ title, description, image, link }) => (
  <Link to={link} className="contenedorTargetas">
    <div className="contenedorImage">
      <img src={image} />
      <h2 className="text">{title}</h2>
    </div>
    <div className="textDescription">
      <p>{description}</p>
    </div>
  </Link>
)

const Recomended = ({ title, typeSite, link }) => (
  <a href={link} className="Recomended" target="_blank" rel="noreferrer">
    <div className="Recomended__image">
      {typeSite === 'youtube' ? (
        <img className="img_Online" src={YoutubeIcon} />
      ) : (
        <img className="img_Online" src={WebIcon} />
      )}
    </div>
    <div className="Recomended__content">
      <p>{title}</p>
    </div>
  </a>
)

export default Plataform
