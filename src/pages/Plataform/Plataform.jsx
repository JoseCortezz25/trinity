import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getLearningPaths, getAllRecommendations } from '../../services/service'
import { getToken } from '../../services/localStorage'
import { Loader } from '../../components/Utils'
import YoutubeIcon from '../../assets/images/youTube.png'
import WebIcon from '../../assets/images/Web.png'
import './Plataform.css'

const Plataform = () => {
  const [learningPaths, setLearningPaths] = useState([{}])
  const [listOfRecommendations, setListOfRecommendations] = useState([{}])

  useEffect(() => {
    getLearningPaths(getToken()).then((data) => {
      setLearningPaths(data)
    })
    getAllRecommendations(getToken()).then((data) => {
      console.log(data.data.result)
      setListOfRecommendations(data.data.result)
    })
  }, [])

  return learningPaths && listOfRecommendations ? (
    <main className="Plataform">
      <h2 className="tittleh2">Rutas de aprendizaje</h2>
      <div className="Content_paths">
        {learningPaths.length > 0 ? (
          learningPaths?.map((paths) => (
            <CardPath
              image={paths.image}
              title={paths.title}
              key={paths.title}
              description={paths.description}
              link={paths.link}
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
    <p className="textDescription">{description}</p>
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
