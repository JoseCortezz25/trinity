import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Complement from "./components/Complement/Complement";
import Map from "./components/Map/Map";
import MainCover from "./components/MainCover/MainCover";
import Information from "./components/Information/Information";
import AboutUs from "./components/AboutUs/AboutUs";
import Service from "./components/Service/Service";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="App">
      <button
        className="buttonTop"
        style={{ display: visible ? "inline" : "none" }}
      >
        <FaArrowCircleUp onClick={scrollToTop} />
      </button>
      <Header />
      <MainCover />
      <AboutUs />
      <Service />
      <Information />
      <Complement />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
