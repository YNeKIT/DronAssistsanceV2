// NavBar.jsx
import Logodron from "../Img/dronlogoedit3.png";
import Djilogo from "../Img/logodji.png";
import "../Components/NavBar.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MD from "../Img/moldova.svg";
import RU from "../Img/russia.svg";
import Menu from "./Menu/Menu";
import Cart from "../Img/cartimg.png";
import Burger from "../Img/burgermenu.svg";
import { useTranslation } from "react-i18next";
import { useCart } from "../CartContext";

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const { t, i18n } = useTranslation();
  const changeLanguageNavBar = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100;
    setScrolling(scrollY > threshold);
  };

  const { cart } = useCart();
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="left">
        <img className="dronlogo" src={Logodron} alt="dronlogo" />
        <img className="djilogo" src={Djilogo} alt="djilogo" />
        <div className="mobile">
          <div className="flags">
            <img
              src={MD}
              alt="mdflag"
              className="moldovaflag"
              onClick={() => changeLanguageNavBar("ro")}
            />
            <img
              src={RU}
              alt="mdflag"
              className="russiaflag"
              onClick={() => changeLanguageNavBar("ru")}
            />
            <img
              src={Burger}
              onClick={() => setMenuActive(!menuActive)}
              alt="burgermenu"
              className="burgermenu"
            />
            <Menu active={menuActive} setActive={setMenuActive} />
          </div>
        </div>
      </div>

      <div className="right">
        <ul>
          <div className="flags">
            <img
              src={MD}
              alt="mdflag"
              className="moldovaflag"
              onClick={() => changeLanguageNavBar("ro")}
            />
            <img
              src={RU}
              alt="mdflag"
              className="russiaflag"
              onClick={() => changeLanguageNavBar("ru")}
            />
          </div>
          <Link to={"/"}>
            <li>{t("navbar_item2")}</li>
          </Link>
          <Link to={"/ServicesPage"}>
            <li>{t("navbar_item3")}</li>
          </Link>
          <Link to={"/BiologicalTypes"}>
            <li>{t("navbar_item1")}</li>
          </Link>
          <Link to={"/AboutUs"}>
            <li>{t("navbar_item4")}</li>
          </Link>
          <Link to={"/ReteaPage"}>
            <li>{t("navbar_item5")}</li>
          </Link>

          <Link to={"/SalesPage"}>
            <button className="btnmagazin">
              <h1 className="btntext">{t("navbar_item6")}</h1>
            </button>
          </Link>
          <Link to={"/CartPage"}>
            <button className="btncos">
              <h1 className="btntext">{t("navbar_item7")}</h1>
              <img src={Cart} alt="cartimg" className="cart_img" />
              {totalItemsInCart > 0 && (
                <span className="cart_count">{totalItemsInCart}</span>
              )}
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
