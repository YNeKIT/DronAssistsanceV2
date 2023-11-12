import React from "react";
import "../Components/DroneContainer.css";
import T30 from "../Img/t30main.png";
import T10 from "../Img/t10formain.png";
import Mavik from "../Img/mavikformain.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Discount1 from "../Img/discount.png";
import Discount2 from "../Img/discount2.png";
import Discount3 from "../Img/discount3.png";
export default function DroneContainer() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="mainDroneContainer">
      <div className="carddrone_home">
        <img src={T30} alt="t30dron" />
        <img src={Discount1} alt="discountimg" />
        <h1 className="carddronetext">T30</h1>
        <Link to={"/SalesPage"}>
          <button className="carddronebtn">{t("dronecontainer1")}</button>
        </Link>
      </div>

      <div className="carddrone_home">
        <img src={T10} alt="t10dron" />
        <img src={Discount2} alt="discountimg" />
        <h1 className="carddronetext">T10</h1>
        <Link to={"/SalesPage"}>
          <button className="carddronebtn">{t("dronecontainer1")}</button>
        </Link>
      </div>

      <div className="carddrone_home">
        <img src={Mavik} alt="mavikdron" />
        <img src={Discount3} alt="discountimg" />
        <h1 className="carddronetext">Mavic 3</h1>
        <Link to={"/SalesPage"}>
          <button className="carddronebtn">{t("dronecontainer1")}</button>
        </Link>
      </div>
    </div>
  );
}
