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


function App() {
 
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
   
    <div className="App">
      <NavBar />
      <div className="containterhome">
        <div className="text-overlay">
          <div className="content">
            <h1 className="texttitle">{t("hello_container1")}</h1>
            <p className="homep">{t("hello_container2")}</p>
            <Link to={"/SalesPage"}>
              <button className="homebtn">
                {t("hello_container3")}
                <img className="sageata" src={Arrow} alt="sageata" />
              </button>
            </Link>
          </div>
        </div>
      </div>

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
