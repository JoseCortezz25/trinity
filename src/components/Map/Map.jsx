import React from "react";
import './Map.css'

const Map = () => {
  const iframe =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d996.1505832090849!2d-75.26703429714279!3d2.9300610304973036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1663105063869!5m2!1ses!2sco";
  return (
    <iframe src={iframe} allowFullScreen="true"></iframe>
    // <iframe
    //   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d996.1505832090849!2d-75.26703429714279!3d2.9300610304973036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1663105063869!5m2!1ses!2sco"
    //   width="600"
    //   height="450"
    //   style="border:0;"
    //   allowFullScreen=""
    //   loading="lazy"
    //   referrerPolicy="no-referrer-when-downgrade"
    // ></iframe>
  );
};

export default Map;
