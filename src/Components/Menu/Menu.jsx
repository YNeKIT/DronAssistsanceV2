import React from "react";
import "../Menu/Menu.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

export default function Menu({ setActive, setMenuActive, active }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className={active ? "menu active" : "menu"}>
      <div className="blur" />
      <div className="menu_content">
        <div className="menu_header"></div>
        <ul className="menuItems">
          <Link to={"/"}>
            <li className="listamenu">{t("navbar_item2")}</li>
          </Link>
          <Link to={"/ServicesPage"}>
            <li className="listamenu">{t("navbar_item3")}</li>
          </Link>
          <Link to={"/BiologicalTipes"}>
            <li className="listamenu">{t("navbar_item1")}</li>
          </Link>
          <Link to={"/ReteaPage"}>
            <li className="listamenu">{t("navbar_item5")}</li>
          </Link>
          <Link to={"/AboutUs"}>
            <li className="listamenu">{t("navbar_item4")}</li>
          </Link>
          <Link to={"/SalesPage"}>
            <li className="listamenu">{t("navbar_item6")}</li>
          </Link>
          <Link to={"/CartPage"}>
            <li className="listamenu">{t("navbar_item7")}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
