import "./Map.css";

const Map = () => {
  const iframe =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d996.1505832090849!2d-75.26703429714279!3d2.9300610304973036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1663105063869!5m2!1ses!2sco";
  return <iframe id="Ubicacion" src={iframe} allowFullScreen={true}></iframe>;
};

export default Map;
