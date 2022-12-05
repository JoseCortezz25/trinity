import React, { useState, useEffect } from 'react'
import { getMemberByUrl } from '../../services/service'
import { useLocation, useParams } from 'react-router-dom'
import { getToken } from '../../services/localStorage'
import './Members.css'
import { MessageNotFound } from '../../components/Utils'
import { NO_RECORDS } from '../../helpers/messages'
const DOMINIO = import.meta.env.VITE_API_DOS

const Members = () => {
  const location = useLocation()
  const { url } = useParams()
  const [member, setMember] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    getMemberByUrl(url, getToken())
      .then(({ data: { data } }) => {
        console.log('📌', data[0].attributes)
        setMember(data[0].attributes)
      })
      .catch((error) => {
        console.log(error);
        setError(true)
      })
  }, [location.pathname])

  if (error) {
    return <MessageNotFound message={NO_RECORDS}/>
  }

  return (
    <div className="Plataform">
      <div className="CardMember">
        <div className="CardMember__info">
          <span>Miembro de Trinity</span>
          <h3>{member.fullName}</h3>
          <p>{member.description}</p>
        </div>
        <div className="CardMember__image">
          <img src={`${DOMINIO}${member.image}`} alt="" />
        </div>
      </div>
    </div>
  ) 
}

export default Members
