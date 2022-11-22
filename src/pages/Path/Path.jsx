import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { ItemContent, Loader } from '../../components/Utils'
import { getLearningPathWithTemarios } from '../../services/service'
import { getToken } from '../../services/localStorage'
import Topics from '../../components/Topics'
import CardTopics from '../../components/CardTopics'
import './Path.css'

const Path = () => {
  const [topics, setTopics] = useState([{}])
  const { ruta } = useParams()
  const [temario, setTemario] = useState([{}])
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const id = searchParams.get('path')

    getLearningPathWithTemarios(id, getToken())
      .then((res) => {
        setTemario(res.data.data.attributes.temarios.data)
        setTopics(res.data.data.attributes)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ruta])

  console.log('temario', temario);
  return topics ? (
    <section className="Plataform Path">
      <h2>{ruta}</h2>
      <p>{topics?.description}</p>

      <div className="ListOfContent">
        <h3>Contenidos</h3>
        {temario?.map(({ id, attributes }) => (
          <ItemContent
            paht={ruta}
            item={attributes?.title}
            key={`${ruta}/${id}`}
          />
        ))}
      </div>

      <div className="ListOfTopics">
        {temario?.map(({ id, attributes }) => (
          <Topics
            title={attributes?.title}
            ide={attributes?.title}
            key={attributes?.title}
          >
            {/* {attributes?.map(
              ({ title, description, level: { atribbutes } }) => ( */}
              <CardTopics
                key={`${attributes?.title}/${attributes?.level}`}
                title={attributes?.level}
                link={`/aprender/${ruta}/${attributes?.title}/${attributes?.level?.atributtes?.level}`}
                description={attributes?.description}
              />
          </Topics>
        ))}
      </div>
    </section>
  ) : (
    <main className="LoaderBackground">
      <Loader />
    </main>
  )
}

export default Path
