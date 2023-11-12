import React from "react";
import Tihograma from "../Img/tihograma.png";
import Dracon from "../Img/hobrodracon.png";
import "./Tihograma.css";
import { useTranslation } from "react-i18next";
export default function TichoGramma() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="MainTihograma">
      <div className="performantaMainTiho">
        <div className="textTiho">
          <h2 className="performtitleTiho">{t("bioProtectie_1")}</h2>

          <div className="ulcontainersTiho">
            <ul className="listaTiho">
              <li>
                <h3 className="textulTiho">{t("bioProtectie_2")}</h3>
              </li>
              <li>
                <p className="partextTiho">{t("bioProtectie_3")}</p>
              </li>
            </ul>

            <ul className="listaTiho">
              <li>
                <h3 className="textulTiho">{t("bioProtectie_4")}</h3>
              </li>
              <li>
                <p className="partextTiho">{t("bioProtectie_5")}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src={Tihograma} className="TihoImg" alt="imagine tehnica" />
      </div>

      <div className="performantaMainTiho">
        <img src={Dracon} className="TihoImg_web" alt="imagine tehnica" />
        <div className="textTiho">
          <div className="ulcontainersTiho">
            <ul className="listaTiho">
              <li>
                <h3 className="textulDracoon">{t("bioProtectie_6")}</h3>
              </li>
              <li>
                <p className="partextTiho">{t("bioProtectie_7")}</p>
              </li>
            </ul>

            <ul className="listaTiho">
              <li>
                <h3 className="textulTiho">{t("bioProtectie_8")}</h3>
              </li>
              <li>
                <p className="partextTiho">{t("bioProtectie_9")}</p>
              </li>
            </ul>
            <img
              src={Dracon}
              className="TihoImg_mobile"
              alt="imagine tehnica"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
