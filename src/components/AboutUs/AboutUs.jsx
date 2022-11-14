import { Title } from '../Utils'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <section className="AboutUs" id="Nosotros">
      <div className="AboutUs__info">
        <Title title="Nosotros" />
        <p>
          Somos un equipo creativo enfocado en satisfacer a nuestros clientes
        </p>
      </div>
    </section>
  )
}

export default AboutUs
