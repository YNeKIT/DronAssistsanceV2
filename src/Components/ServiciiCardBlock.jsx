import React from "react";
import "./ServiciiCardBlock.css";
import Cloud from "../Img/cloud.svg";
import Curvearrow from "../Img/curvearrow.svg";
import Done from "../Img/done.svg";
import Clock from "../Img/clock.svg";
import Usb from "../Img/usb.svg";
import Dolar from "../Img/dolar.svg";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
export default function ServiciiCardBlock() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="ServiciiCardMain">
      <h1 className="titluServBlock">{t("servicii_9")}</h1>

      <div className="CardContainer">
        <div className="ServiciiCardBlock">
          <img src={Dolar} className="servicecardimg" />
          <h2 className="Title_card"> {t("servicii_10")}</h2>
          <p className="content_card">{t("servicii_11")}</p>
        </div>

        <div className="ServiciiCardBlock">
          <img src={Cloud} className="servicecardimg" />
          <h2 className="Title_card"> {t("servicii_12")}</h2>
          <p className="content_card">{t("servicii_13")}</p>
        </div>

        <div className="ServiciiCardBlock">
          <img src={Curvearrow} className="servicecardimg" />
          <h2 className="Title_card"> {t("servicii_14")}</h2>
          <p className="content_card">{t("servicii_15")}</p>
        </div>

        <div className="ServiciiCardBlock">
          <img src={Done} className="servicecardimg" />
          <h2 className="Title_card"> {t("servicii_16")}</h2>
          <p className="content_card">{t("servicii_17")}</p>
        </div>

        <div className="ServiciiCardBlock">
          <img src={Clock} className="servicecardimg" />
          <h2 className="Title_card"> {t("servicii_18")}</h2>
          <p className="content_card">{t("servicii_19")}</p>
        </div>

        <div className="ServiciiCardBlock">
          <img src={Usb} className="servicecardimg" />
          <h2 className="Title_card"> {t("servicii_20")}</h2>
          <p className="content_card">{t("servicii_21")}</p>
        </div>
      </div>
    </div>
  );
}
