import "./App.css";
import NavBar from "./Components/NavBar";
import Numbers from "./Components/Numbers";
import Performanta from "./Components/Performanta";
import DroneContainer from "./Components/DroneContainer";
import Footer from "./Components/Footer";
import ServiciiBlock from "./Components/ServiciiBlock";
import TehModern from "./Components/TehModern";
import ImagesBlock from "./Components/ImagesBlock";
import MapContact from "./Components/MapContact";
import Arrow from "../src/Img/arrowhome.svg";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import AppContext from "./CartContext";
import { Link } from "react-router-dom";
import BackgroundSlider from "./Components/Slider/BackgroundSlider";
import MavikBackground from "./Img/backgroundMavik.jpg";
import MavikBackground2 from "./Img/backgroundMavik2.jpeg";
import AssistanceBg from "./Img/backgroundfinal.png";
import Sunset from "./Img/backgroundsunset.jpg";




function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };



  return (
    <div className="App">
      <NavBar />
      <BackgroundSlider  />
      <Numbers />
      <Performanta />
      <DroneContainer />
      <ServiciiBlock />
      <TehModern />
      <ImagesBlock />
      <MapContact />
      <Footer />
    </div>
  );
}

export default App;
