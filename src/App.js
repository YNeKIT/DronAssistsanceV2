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
import backedit4 from "./Img/backedit4.jpg";
import backedit2 from "./Img/backgroundedit2.jpg";
import backedit3 from "./Img/backgroundfinal.png";
function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const images = [backedit2, backedit4, backedit3];

  return (
    <div className="App">
      <NavBar />
      <BackgroundSlider images={images} />
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
