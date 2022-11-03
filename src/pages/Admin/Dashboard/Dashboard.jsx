import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CoverGreetings } from '../../../components/Utils/Utils'
import UserContext from '../../../hooks/UserContext'
import './Dashboard.css'

const Dashboard = () => {
  const { user } = useContext(UserContext)
  return (
    <div className="Dashboard">
      <CoverGreetings
        title="Dashboard"
        isHome={true}
        greeting={user?.fullName}
      />

      <div className="DashboardSections">
        <DashboradCard
          title="Usuarios"
          description="Administrar lo usuarios. Crea, elimina o actualiza la información de los usuarios."
          path="/usuarios"
        />
        <DashboradCard
          title="Rutas de Aprendizaje"
          description="Administra las rutas de aprendizaje. Añade, edita o elimina el contenido."
          path="/rutas"
        />
        <DashboradCard
          title="Contenidos"
          description="Administra los contenidos de aprendizaje. Añade, elimina o actualiza las contenidos."
          path="/contenidos"
        />
        <DashboradCard
          title="Recursos Recomendados"
          description="Administra los recursos recomendados. Crea, elimina o actualiza la información."
          path="/recursos"
        />
        <DashboradCard
          title="Temario de las rutas"
          description="Administra los temas de las rutas. Añade, edita o elimina el contenido."
          path="/temario"
        />
      </div>
    </div>
  )
}

export default Dashboard

const DashboradCard = ({ title, description, path }) => {
  return (
    <div className="DashboardSections_Card">
      <Link to={`/admin${path}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  )
}
