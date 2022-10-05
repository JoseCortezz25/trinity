import Complement from "../../components/Complement/Complement";
import Map from "../../components/Map/Map";
import MainCover from "../../components/MainCover/MainCover";
import Information from "../../components/Information/Information";
import AboutUs from "../../components/AboutUs/AboutUs";
import Service from "../../components/Service/Service";
import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      
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
