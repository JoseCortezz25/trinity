import Complement from "../../components/Complement/Complement";
import Map from "../../components/Map/Map";
import MainCover from "../../components/MainCover/MainCover";
import Information from "../../components/Information/Information";
import AboutUs from "../../components/AboutUs/AboutUs";
import Service from "../../components/Service/Service";
import WhatsAppIcon from "../../assets/icons/WhatsappIcon.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <div className="WhatsappButton">
        <a
          href="https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20coche"
          target="_blank"
        >
          <img src={WhatsAppIcon} alt="" className="WhatsappButton__icon" />
        </a>
      </div>
      <MainCover />
      <AboutUs />
      <Service />
      <Information />
      <Complement />
      <Map />
    </div>
  );
};

export default Home;
