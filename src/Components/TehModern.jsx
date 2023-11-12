import React from "react";
import Threepoint from "../Img/threepoint.svg";
import Fourpoint from "../Img/fourpoint.svg";
import OnePoint from "../Img/onepoint.svg";
import TehImg from "../Img/tehmodernimg.png";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import "../Components/Performanta.css";
export default function TehModern() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="performantasupermain">
      <div className="performantaMain">
        <div className="textPerformanta">
          <h2 className="performtitle">{t("tehnologii_1")}</h2>
          <h1 className="performslog">{t("tehnologii_2")}</h1>
          <div className="ulcontainers">
            <ul className="lista">
              <li>
                <img src={OnePoint} alt="imaginePoint" />
              </li>
              <li>
                <h3 className="textul">{t("tehnologii_3")}</h3>
              </li>
              <li>
                <p className="partext">{t("tehnologii_4")}</p>
              </li>
            </ul>

            <ul className="lista">
              <li>
                <img src={OnePoint} alt="imaginePoint" />
              </li>
              <li>
                <h3 className="textul">{t("tehnologii_5")}</h3>
              </li>
              <li>
                <p className="partext">{t("tehnologii_6")}</p>
              </li>
            </ul>
            <ul className="lista">
              <li>
                <img src={OnePoint} alt="imaginePoint" />
              </li>
              <li>
                <h3 className="textul">{t("tehnologii_7")}</h3>
              </li>
              <li>
                <p className="partext">{t("tehnologii_8")}</p>
              </li>
            </ul>
            <ul className="lista">
              <li>
                <img src={OnePoint} alt="imaginePoint" />
              </li>
              <li>
                <h3 className="textul">{t("tehnologii_9")}</h3>
              </li>
              <li>
                <p className="partext">{t("tehnologii_10")}</p>
              </li>
            </ul>
          </div>
        </div>
        <img className="forweb" src={TehImg} alt="imagine tehnica" />
      </div>
      <img className="performimgformobile" src={TehImg} alt="imagine tehnica" />
    </div>
  );
}
