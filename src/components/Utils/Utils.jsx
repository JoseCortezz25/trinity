import { Link, useParams } from 'react-router-dom'
import { FaGhost } from 'react-icons/fa'
import { BiGhost } from 'react-icons/bi'
import './Utils.css'

export const Title = ({ title, styles = '' }) => {
  return (
    <div className={`MainTitle ${styles}`}>
      <h2>{title}</h2>
      <hr />
    </div>
  )
}

const toScroll = (item) => document.getElementById(item).scrollIntoView()

export const ItemContent = ({ item }) => {
  const { ruta } = useParams()
  return (
    <Link
      onClick={() => toScroll(item)}
      className="ItemContent"
      to={`/aprender/${ruta}#${item}`}
    >
      <div>{item}</div>
    </Link>
  )
}

export const Loader = () => {
  return <span className="loader"></span>
}

export const CoverGreetings = ({ greeting, isHome = false }) => (
  <div className="Greetings">
    <h1>Dashboard</h1>
    {isHome ? <p>¡Hola, {greeting}!</p> : <p>{greeting}</p>}
  </div>
)

export const MessageNotFound = ({ message }) => (
  <div className="MessageNotFound">
    <div className="MessageNotFound__icon">
      <FaGhost />
    </div>
    <p>{message}</p>
  </div>
)

export const MessageEmptyData = ({ message }) => (
  <div className="MessageEmptyData">
    <div className="MesssageEmptyData__icon">
      <BiGhost />
    </div>
    <p>{message}</p>
  </div>
)
