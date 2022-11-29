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
          title="Recursos Recomendados"
          description="Administra los recursos recomendados. Crea, elimina o actualiza la información."
          path="/recursos"
        />
        <DashboradCard
          title="Rutas de Aprendizaje"
          description="Administra las rutas de aprendizaje. Añade, edita o elimina las rutas."
          path="/rutas"
        />
        <DashboradCard
          title="Temario de las rutas"
          description="Administra los temas de las temas de las rutas. Añade, edita o elimina los temas."
          path="/temario"
        />
        <DashboradCard
          title="Contenidos"
          description="Administra los contenidos de aprendizaje. Añade, elimina o actualiza los contenidos."
          path="/contenidos"
        />
      </div>
    </div>
  )
}

export default Dashboard

const DashboradCard = ({ title, description, path }) => {
  return (
    <Link to={`/admin${path}`} className="no-link">
      <div className="DashboardSections_Card no-selectable">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  )
}
