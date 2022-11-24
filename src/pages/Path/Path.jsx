/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemContent, Loader, MessageNotFound } from '../../components/Utils'
import { getLearningPathWithTemarios } from '../../services/service'
import { getToken } from '../../services/localStorage'
import CardTopics from '../../components/CardTopics'
import { DATA_NOT_FOUND_MESSAGE } from '../../helpers/messages'
import './Path.css'

const Path = () => {
  const [topics, setTopics] = useState([{}])
  const [temario, setTemario] = useState([{}])
  const [listOfContents, setListOfContents] = useState([{}])
  const { ruta } = useParams()

  useEffect(() => {
    getLearningPathWithTemarios(ruta, getToken())
      .then((res) => {
        setTemario(res.data.data.attributes.temarios.data)
        setTopics(res.data.data.attributes)
        setListOfContents(
          res.data.data.attributes.temarios.data.map(
            ({ id, attributes: { title, level } }) => {
              const levelId = level.data.id
              const level_label = level.data.attributes.title
              return { id: [id, levelId], label: `${title} - ${level_label}` }
            }
          )
        )
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ruta])

  console.log('listOfContents', listOfContents)
  console.log('temario', temario.length)

  return temario ? (
    <section className="Plataform Path">
      <h2>{topics?.title}</h2>
      <p>{topics?.description}</p>

      {temario.length > 0 ? (
        <>
          <div className="ListOfContent">
            <h3>Contenidos</h3>
            {listOfContents?.map(({ id, label }) => (
              <ItemContent paht={id} item={label} key={`${label}/${id}`} />
            ))}
          </div>

          <div className="ListOfTopics">
            {temario?.map(({ id, attributes }) => {
              const levelLabel = attributes?.level.data.attributes.title
              return (
                <CardTopics
                  key={id}
                  ide={`${attributes?.title} - ${levelLabel}`}
                  title={attributes?.title}
                  level={levelLabel}
                  link={`/aprender/${ruta}/${id}`}
                  description={attributes?.description}
                />
              )
            })}
          </div>
        </>
      ) : (
        <MessageNotFound message={DATA_NOT_FOUND_MESSAGE} />
      )}
    </section>
  ) : (
    <main className="LoaderBackground">
      <Loader />
    </main>
  )
}

export default Path
