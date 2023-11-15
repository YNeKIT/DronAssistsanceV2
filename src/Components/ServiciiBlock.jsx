import React from "react";
import "./ServiciiBlock.css";
import MoniIcon from "../Img/droneiconcamera.svg";
import TratIcon from "../Img/droneicontrat.svg";
import EntomIcon from "../Img/droneiconwifi.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function ServiciiBlock() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="main">
      <h1>{t("serviciicard_1")}</h1>

      <div className="ServiciiMain">
        <Link to={"/ServicesPage"}>
          <div className="ServiciiCard">
            <img className="droneicon_card" alt="droneiconcard" src={MoniIcon}  />
            <h1 className="ServText">{t("serviciicard_2")}</h1>
            <p className="ServInfo">{t("serviciicard_3")}</p>
          </div>
        </Link>
        <Link to={"/ServicesPage"}>
          <div className="ServiciiCard">
            <img className="droneicon_card" alt="droneiconcard" src={TratIcon} />
            <h1 className="ServText"> {t("serviciicard_4")}</h1>
            <p className="ServInfo">{t("serviciicard_5")}</p>
          </div>
        </Link>
        <Link to={"/ServicesPage"}>
          <div className="ServiciiCard">
            <img className="droneicon_card" alt="droneiconcard" src={EntomIcon} />
            <h1 className="ServText"> {t("serviciicard_6")}</h1>
            <p className="ServInfo">{t("serviciicard_7")}</p>
          </div>
        </Link>
      </div>
      <Link to={"/ServicesPage"}>
        <button className="btnservice"> {t("serviciicard_8")}</button>
      </Link>
    </div>
  );
}
