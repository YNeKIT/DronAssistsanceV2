import React from "react";
import { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "./ServicesPage.css";
import Dronebg from "../Img/droneservicii.png";
import ServiciiPageInfo from "../Components/ServiciiPageInfo";
import ServiciiCardBlock from "../Components/ServiciiCardBlock";
import Consultatie from "../Components/Consultatie";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

export default function ServicesPages() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="ServiciisMain">
      <NavBar />
      <div className="HomeServicii">
        <img className="dronebg" src={Dronebg} />
        <h1 className="pagetitle">{t("servicii_1")}</h1>
        <p className="pagep">{t("servicii_2")}</p>
      </div>

      <ServiciiPageInfo />
      <ServiciiCardBlock />
      <Consultatie />
      <Footer />
    </div>
  );
}
