import React from "react";
import "./CapcaneInt.css";
import CapImg from "../Img/imgcapcane.png";
import Numar1 from "../Img/numar1.svg";
import Numar2 from "../Img/numar2.svg";
import Numar3 from "../Img/numar3.svg";
import { useTranslation } from "react-i18next";

export default function CapcaneInt() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="MainCap">
      <div className="titlusiimg">
        <h1 className="captitlu">{t("bioProtectie_capcane_1")}</h1>
        <p className="captext">{t("bioProtectie_capcane_2")}</p>

        <img src={CapImg} className="imgcapcane" />
        <div>
          <h2 className="capcanefir">{t("bioProtectie_capcane_3")}</h2>
          <p className="captext">{t("bioProtectie_capcane_4")}</p>
        </div>
      </div>

      <div className="parteajos">
        <div className="cumfunct">
          <h3 className="cumfuncttitle">{t("bioProtectie_capcane_5")}</h3>
        </div>

        <div className="numarcont">
          <img className="numar" src={Numar1} />
          <div className="pasiidreapta">
            <h3 className="pasiitext">{t("bioProtectie_capcane_6")}</h3>
            <p className="captext">{t("bioProtectie_capcane_7")}</p>
          </div>
        </div>

        <div className="numarcont">
          <img className="numar" src={Numar2} />
          <div className="pasiidreapta">
            <h3 className="pasiitext">{t("bioProtectie_capcane_8")}</h3>
            <p className="captext">{t("bioProtectie_capcane_9")}</p>
          </div>
        </div>
        <div className="numarcont">
          <img className="numar" src={Numar3} />
          <div className="pasiidreapta">
            <h3 className="pasiitext">{t("bioProtectie_capcane_10")}</h3>
            <p className="captext">{t("bioProtectie_capcane_11")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
