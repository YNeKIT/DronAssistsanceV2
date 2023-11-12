import React from "react";
import "./ServiciiPageInfo.css";
import ServImg1 from "../Img/servblock1.png";
import ServImg2 from "../Img/servblock2.png";
import ServImg3 from "../Img/servblock3.png";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
export default function ServiciiPageInfo() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="ServiciiPageInfoMain">
      <div className="MonScan">
        <h1 className="Titluserv">{t("servicii_3")}</h1>

        <div className="ServBlock">
          <div className="textcontainer">
            <h1 className="textcard">{t("servicii_4")}</h1>
          </div>
          <img className="imgservblock" src={ServImg1} />
        </div>
      </div>

      <div className="MonScan">
        <h1 className="Titluserv"> {t("servicii_5")}</h1>

        <div className="ServBlock">
          <img className="imgservblock" src={ServImg2} />

          <div className="textcontainer">
            <h1 className="textcard">{t("servicii_6")}</h1>
          </div>
        </div>
      </div>

      <div className="MonScan">
        <h1 className="Titluserv"> {t("servicii_7")}</h1>

        <div className="ServBlock">
          <div className="textcontainer">
            <h1 className="textcard">{t("servicii_8")}</h1>
          </div>
          <img className="imgservblock" src={ServImg3} />
        </div>
      </div>
    </div>
  );
}
