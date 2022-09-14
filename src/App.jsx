import { useState, useRef } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Complement from "./components/Complement/Complement";
import Map from "./components/Map/Map";
import MainCover from "./components/MainCover/MainCover";
import AboutUs from "./components/AboutUs/AboutUs";
import Service from "./components/Service/Service";

function App() {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div className="App">
      <Header />
      <MainCover />
      <AboutUs />
      <Service />
      <Complement />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
