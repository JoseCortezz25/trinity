import './Map.css'

const Map = () => {
  const iframe =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.1431362945801!2d-75.27215521920532!3d2.93841750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b743ff862292b%3A0xe13ec061832a82ca!2sCra.%2025c%20%232666%2C%20Neiva%2C%20Huila!5e0!3m2!1ses!2sco!4v1669513307649!5m2!1ses!2sco'
  return <iframe id="Ubicacion" src={iframe} allowFullScreen={true}></iframe>
}

export default Map;