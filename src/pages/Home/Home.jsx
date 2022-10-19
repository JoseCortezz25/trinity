import Complement from "../../components/Complement";
import Map from "../../components/Map";
import MainCover from "../../components/MainCover";
import Information from "../../components/Information";
import AboutUs from "../../components/AboutUs";
import Service from "../../components/Service";

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
