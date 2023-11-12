import React from "react";
import "./ProiecteCompanie.css";
import Arrow from "../Img/arrowright.svg";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
export default function ProiecteCompanie() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="proiectemain">
      <h2 className="componenttitle">{t("aboutUs_proiecte_1")}</h2>
      <h1 className="compslog">{t("aboutUs_proiecte_2")}</h1>

      <div className="containterproiecte">
        <div className="cardproiecteone">
          <div className="background_image"></div>
          <div className="text_container">
            <h2 className="proiecte_title">PNUD Moldova</h2>
            <p className="proiecte_par">{t("aboutUs_proiecte_3")}</p>
            <button className="proiecte_btn">{t("aboutUs_proiecte_4")}</button>
          </div>
        </div>

        <div className="cardproiectetwo">
          <div className="background_image2"></div>
          <div className="text_container">
            <h2 className="proiecte_title">PNUD Moldova</h2>
            <p className="proiecte_par">{t("aboutUs_proiecte_5")}</p>
            <button className="proiecte_btn">{t("aboutUs_proiecte_6")}</button>
          </div>
        </div>

        <div className="cardproiectethree">
          <div className="background_image3"></div>
          <div className="text_container">
            <h2 className="proiecte_title">Agrotech Arena</h2>
            <p className="proiecte_par">{t("aboutUs_proiecte_7")}</p>
            <button className="proiecte_btn">{t("aboutUs_proiecte_8")}</button>
          </div>
        </div>
      </div>

      <div className="evenimente">
        <h1>{t("aboutUs_proiecte_9")}</h1>

        <div className="evenimente_container">
          <div className="container_card">
            <div className="data">
              <h1 className="data_numb">19</h1>
              <p className="data_month">OCT</p>
            </div>

            <div className="evenimente_title">
              <div className="urmeaza_container">
                <h3 className="urmeaza">{t("aboutUs_proiecte_10")}</h3>
                <hr className="linie_evenimente" />
              </div>

              <div className="title_btn">
                <h1 className="text_evenimente">
                  Say no to plastic usage and save the planet
                </h1>
                <button className="evenimente_btn">
                  <img className="arrow_right" src={Arrow} />
                </button>
              </div>
            </div>
          </div>

          <div className="container_card">
            <div className="data">
              <h1 className="data_numb">25</h1>
              <p className="data_month">OCT</p>
            </div>

            <div className="evenimente_title">
              <div className="urmeaza_container">
                <h3 className="urmeaza">{t("aboutUs_proiecte_10")}</h3>
                <hr className="linie_evenimente" />
              </div>

              <div className="title_btn">
                <h1 className="text_evenimente">
                  Say no to plastic usage and save the planet
                </h1>
                <button className="evenimente_btn">
                  <img src={Arrow} className="arrow_right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
