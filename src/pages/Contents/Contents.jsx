import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { Loader, MessageNotFound } from '../../components/Utils'
import Modal from '../../components/Modal'

import './Contents.css'
import { getSyllabusWithContents } from '../../services/service'
import { getToken } from '../../services/localStorage'

const Contents = () => {
  const { content } = useParams()
  const [contents, setContents] = useState([{}])
  const [topic, setTopic] = useState({ title: '', level: '' })

  useEffect(
    (res) => {
      getSyllabusWithContents(content, getToken()).then(
        ({
          data: {
            data: { attributes },
          },
        }) => {
          console.log('contents', attributes.contents.data)
          setTopic({
            title: attributes.title,
            level: attributes.level.data.attributes.title,
          })
          setContents(attributes.contents.data)
        }
      )
    },
    [content]
  )

  return topic || contents ? (
    <div className="Plataform Contents">
      <div className="Contents__head">
        <h2>{topic?.title}</h2>
        <div className="Contents__line">
          <span>{topic?.level}</span>
          <hr />
        </div>
      </div>

      <div className="Contents__body">
        {contents?.length > 0 ? (
          <>
            {contents?.map(({ id, attributes }) => (
              <CardContent
                key={`${attributes?.description}${id}`}
                number={id}
                description={attributes?.description}
                title={attributes?.title}
                level={attributes?.level.data?.attributes?.title}
                contents={contents}
                link={attributes?.link}
              />
            ))}
          </>
        ) : (
          <MessageNotFound message="No logramos encontrar este contenido. Es probable que el contenido no exista o este deshabilitado temporalmente. Intentalo de nuevo más tarde." />
        )}
      </div>
    </div>
  ) : (
    <main className="LoaderBackground">
      <Loader />
    </main>
  )
}

const CardContent = ({ number, title, level, link, description }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div
        className="CardContents"
        onClick={() => setOpenModal((prevState) => !prevState)}
      >
        <span className={`${level?.toLowerCase()}`}>{number}</span>
        <div className="CardContents__body">
          <p>{title}</p>
        </div>
      </div>
      {openModal && (
        <Modal>
          <div className="ModalContents">
            <button
              className="btnCloseModal"
              onClick={() => setOpenModal((prevState) => !prevState)}
            >
              <AiOutlineClose />
            </button>
            <h2>{title}</h2>
            <p>{description}</p>
            <a
              className="btnStandard btnDark"
              target="_blank"
              href={link}
              rel="noreferrer"
            >
              ir al contenido
            </a>
          </div>
        </Modal>
      )}
    </>
  )
}

export default Contents
