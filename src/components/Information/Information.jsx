import { programmerIcon as imageCoverProgrammer } from '../../assets'

import './Information.css'

const Information = () => {
  return (
    <section className="Information">
      <div className="container">
        <div className="boxImage">
          <img src={imageCoverProgrammer} alt="" />
        </div>
        <div className="boxInfo">
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos una comunidad de desarrolladores comprometidos con las
            necesidades de nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Information
