import "../Components/Performanta.css";
import PerformantaImg from "../Img/performantaimg.png";
import OnePoint from "../Img/onepoint.svg";
import React from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
export default function Performanta() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="ultramain">
      <div className="performantaMain">
        <img
          className="forweb"
          src={PerformantaImg}
          alt="imagine performanta"
        />
        <div className="textPerformanta">
          <h2 className="performtitle">{t("performanta_1")}</h2>
          <h1 className="performslog">{t("performanta_2")}</h1>
          <div className="ulcontainers">
            <ul className="lista">
              <li className="lista_li">
                <img
                  className="imaginePoint"
                  src={OnePoint}
                  alt="imaginePoint"
                />
                <h3 className="textul">{t("performanta_3")}</h3>
              </li>
              <li>
                <p className="partext">{t("performanta_4")}</p>
              </li>
            </ul>
            <ul className="lista">
              <li className="lista_li">
                <img
                  className="imaginePoint"
                  src={OnePoint}
                  alt="imaginePoint"
                />
                <h3 className="textul">{t("performanta_5")}</h3>
              </li>
              <li>
                <p className="partext">{t("performanta_6")}</p>
              </li>
            </ul>
            <ul className="lista">
              <li className="lista_li">
                <img
                  className="imaginePoint"
                  src={OnePoint}
                  alt="imaginePoint"
                />
                <h3 className="textul">{t("performanta_7")}</h3>
              </li>
              <li>
                <p className="partext">{t("performanta_8")}</p>
              </li>
            </ul>
            <ul className="lista">
              <li className="lista_li">
                <img
                  className="imaginePoint"
                  src={OnePoint}
                  alt="imaginePoint"
                />
                <h3 className="textul">{t("performanta_9")}</h3>
              </li>
              <li>
                <p className="partext">{t("performanta_10")}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mobile_photo_container">
        <img
          className="mobilephoto"
          src={PerformantaImg}
          alt="imagine performanta"
        />
      </div>
    </div>
  );
}
