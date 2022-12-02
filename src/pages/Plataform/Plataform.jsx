import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  getAllRecommendations,
  getAllLearningPaths,
} from '../../services/service'
import LogoIcon from '../../assets/images/LogoIcon.png'
import { getToken } from '../../services/localStorage'
import { Loader, MessageNotFound } from '../../components/Utils'
import YoutubeIcon from '../../assets/images/youTube.png'
import WebIcon from '../../assets/images/Web.png'
import { DATA_NOT_FOUND_MESSAGE } from '../../helpers/messages'
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
      {learningPaths.length > 0 ? (
        <div className="Content_paths">
          {learningPaths?.map(({ id, attributes }) => (
            <CardPath
              title={attributes?.title}
              key={attributes?.title}
              description={attributes?.description}
              link={`/aprender/${id}`}
            />
          ))}
        </div>
      ) : (
        <MessageNotFound message={DATA_NOT_FOUND_MESSAGE} />
      )}
      <h2 className="tittleh2">Recursos recomendados</h2>
      {listOfRecommendations.length > 0 ? (
        <div className="RecomemdedCards">
          {listOfRecommendations?.map(({ id, attributes }) => (
            <Recomended
              title={attributes?.title}
              key={`${attributes?.title}${id}`}
              typeSite={attributes?.type}
              link={attributes?.link}
            />
          ))}
        </div>
      ) : (
        <MessageNotFound message={DATA_NOT_FOUND_MESSAGE} />
      )}
    </main>
  ) : (
    <main className="LoaderBackground">
      <Loader />
    </main>
  )
}

const CardPath = ({ title, description, link }) => (
  <Link to={link} className="CardPath">
    <h3 className="CardPath__title">{title}</h3>
    <div className="CardPath__description">
      <p>{description}</p>
    </div>
  </Link>
)

const Recomended = ({ title, typeSite, link }) => (
  <a href={link} className="Recomended" target="_blank" rel="noreferrer">
    <div className="Recomended__image">
      {typeSite === 'YOUTUBE' ? (
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
