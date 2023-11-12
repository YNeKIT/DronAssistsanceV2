import React from "react";
import "./ServiciiBlock.css";
import MoniIcon from "../Img/dronemonitorizare.png";
import TratIcon from "../Img/dronetratamente.png";
import EntomIcon from "../Img/droneentomofag.png";
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
            <img src={MoniIcon} />
            <h1 className="ServText">{t("serviciicard_2")}</h1>
            <p className="ServInfo">{t("serviciicard_3")}</p>
          </div>
        </Link>
        <Link to={"/ServicesPage"}>
          <div className="ServiciiCard">
            <img src={TratIcon} />
            <h1 className="ServText"> {t("serviciicard_4")}</h1>
            <p className="ServInfo">{t("serviciicard_5")}</p>
          </div>
        </Link>
        <Link to={"/ServicesPage"}>
          <div className="ServiciiCard">
            <img src={EntomIcon} />
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
