import './Map.css'

const Map = () => {
  const iframe =
    'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1992.2855012017683!2d-75.27107129643402!3d2.9388496551190872!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1668011898601!5m2!1ses!2sco'
  return <iframe id="Ubicacion" src={iframe} allowFullScreen={true}></iframe>
}

export default Map
