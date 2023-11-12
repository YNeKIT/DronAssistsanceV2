import React from "react";
import "./AvantajeEntomo.css";
import Randament from "../Img/randament.svg";
import Economii from "../Img/economii.svg";
import Fertilitate from "../Img/fertilitate.svg";
import Precizie from "../Img/precizie.svg";
import Durabilitate from "../Img/durabilitate.svg";
import Sustenabilitate from "../Img/sustentibilitate.svg";
import { useTranslation } from "react-i18next";
export default function AvantajeEntomo() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="AvantajMain">
      <div className="ContentAvantaje">
        <h1 className="avantajetext">{t("bioProtectie_avantaje_1")}</h1>
        <div className="firstline">
          <div className="cardcontentline">
            <img src={Randament} />
            <div>
              <h2 className="avantajename">{t("bioProtectie_avantaje_2")}</h2>
              <p className="avantajeparag">{t("bioProtectie_avantaje_3")}</p>
            </div>
          </div>

          <div className="cardcontentline">
            <img src={Economii} />
            <div>
              <h2 className="avantajename">{t("bioProtectie_avantaje_4")}</h2>
              <p className="avantajeparag">{t("bioProtectie_avantaje_5")}</p>
            </div>
          </div>

          <div className="cardcontentline">
            <img src={Sustenabilitate} />
            <div>
              <h2 className="avantajename">{t("bioProtectie_avantaje_6")}</h2>
              <p className="avantajeparag">{t("bioProtectie_avantaje_7")}</p>
            </div>
          </div>
        </div>

        <div className="secondline">
          <div className="cardcontentline">
            <img src={Fertilitate} />
            <div>
              <h2 className="avantajename">{t("bioProtectie_avantaje_8")}</h2>
              <p className="avantajeparag">{t("bioProtectie_avantaje_9")}</p>
            </div>
          </div>

          <div className="cardcontentline">
            <img src={Precizie} />
            <div>
              <h2 className="avantajename">{t("bioProtectie_avantaje_10")}</h2>
              <p className="avantajeparag">{t("bioProtectie_avantaje_11")}</p>
            </div>
          </div>

          <div className="cardcontentline">
            <img src={Durabilitate} />
            <div>
              <h2 className="avantajename">{t("bioProtectie_avantaje_12")}</h2>
              <p className="avantajeparag">{t("bioProtectie_avantaje_13")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
