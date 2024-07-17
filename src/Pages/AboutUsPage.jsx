import React from "react";
import "./AboutUsPage.css";
import AboutBg from "../Img/aboutimg.png";
import NavBar from "../Components/NavBar";
import Ghilimele from "../Img/ghilimele.svg";
import Avatar from "../Img/vitalieimg.svg";
import OnePoint from "../Img/onepoint.svg";
import Footer from "../Components/Footer";
import ProiecteCompanie from "../Components/ProiecteCompanie";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function AboutUsPage() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="mainabout">
      <NavBar />

      <div className="HomeServicii">
        <img className="dronebg" src={AboutBg} alt="dronebg" />

        <div className="containerside">
          <div className="leftside">
            <img src={Ghilimele} className="ghilimele" />
            <p className="parlef">{t("aboutUs_1")}</p>

            <div className="avatarpart">
              <img src={Avatar} alt="avatar" />
              <div className="avatarinfo">
                <p className="avatarname">{t("aboutUs_2")}</p>
                <p className="avatarstatus">{t("aboutUs_3")}</p>
              </div>
            </div>
            <p className="bottom_avatar_part">{t("aboutUs_4")}</p>
          </div>

          <div className="rightside">
            <h1 className="titleright">{t("aboutUs_5")}</h1>

            <div className="containerinfo">
              <div className="infocard">
                <div className="point_title">
                <img src={OnePoint} className="point" alt="point" />
                <h2 className="infocardtext">{t("aboutUs_6")}</h2>
                </div>
                <p className="infocardpar">{t("aboutUs_7")}</p>
              </div>

              <div className="infocard">
              <div className="point_title">
                <img src={OnePoint} className="point" alt="point" />
                <h2 className="infocardtext">{t("aboutUs_8")}</h2>
                </div>
                <p className="infocardpar">{t("aboutUs_9")}</p>
              </div>

              <div className="infocard">
              <div className="point_title">
                <img src={OnePoint} className="point" alt="point" />
                <h2 className="infocardtext">{t("aboutUs_10")}</h2>
                </div>
                <p className="infocardpar">{t("aboutUs_11")}</p>
              </div>

              <div className="infocard">
              <div className="point_title">
                <img src={OnePoint} className="point" alt="point" />
                <h2 className="infocardtext">{t("aboutUs_12")}</h2>
                </div>
                <p className="infocardpar">{t("aboutUs_13")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProiecteCompanie />
      <div className="center-content">
        <div className="proiectul_nostru">
          <div className="title_proiectul_nostru">
            <hr className="linie_proiect" />
            <h2 className="title_text_proiect">{t("aboutUs_14")}</h2>
          </div>

          <div className="viitorul_agriculturii_text">
            <h1 className="text_viitor_agricultura">{t("aboutUs_15")}</h1>
            <p className="par_viitor_agricult">{t("aboutUs_16")}</p>
          </div>

          <div className="container_background_viitor">
            <h1 className="text_echipa">{t("aboutUs_17")}</h1>
            <Link to={"/ReteaPage"}>
              <button className="btn_viitor">{t("aboutUs_18")}</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
