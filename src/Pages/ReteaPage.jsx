import React from "react";
import "./ReteaPage.css";
import NavBar from "../Components/NavBar";
import Colaborare from "../Img/colaborare.png";
import AcountTree from "../Img/accounttree.svg";
import Wallet from "../Img/wallet.svg";
import Howtoreg from "../Img/howtoreg.svg";
import Contributieimg from "../Img/contributieimg.png";
import IconMail from "../Img/Iconmail.svg";
import IconTelephone from "../Img/Icontelephone.svg";
import IconNote from "../Img/Iconnote.svg";
import Footer from "../Components/Footer";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

export default function ReteaPage() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="MainRetea">
      <NavBar />

      <div className="colaborare_block">
        <div className="colaborare_text">
          <h2 className="colaborare_title"> {t("retea_1")}</h2>
          <h1 className="colaborare_slogan"> {t("retea_2")}</h1>
          <p className="colaborare_content">{t("retea_3")}</p>
        </div>

        <div className="colaborare_img">
          <img src={Colaborare} alt="colaborareimg" />
        </div>
      </div>

      <div className="beneficii_block">
        <div className="beneficii_introducere">
          <div className="beneficii_oferim">
            {" "}
            <h2 className="beneficii_oferim_oferim">{t("retea_4")}</h2>{" "}
          </div>
          <h2 className="beneficii_oferim_text">{t("retea_5")}</h2>
        </div>

        <div className="beneficii_card_block">
          <div className="beneficii_card">
            <img src={AcountTree} alt="colaborareimg" />
            <h3 className="beneficii_card_title">{t("retea_6")}</h3>
            <p className="beneficii_card_content">{t("retea_7")}</p>
          </div>

          <div className="beneficii_card">
            <img src={Wallet} alt="colaborareimg" />
            <h3 className="beneficii_card_title">{t("retea_8")}</h3>
            <p className="beneficii_card_content">{t("retea_9")}</p>
          </div>

          <div className="beneficii_card">
            <img src={Howtoreg} alt="colaborareimg" />
            <h3 className="beneficii_card_title">{t("retea_10")}</h3>
            <p className="beneficii_card_content">{t("retea_11")}</p>
          </div>
        </div>
      </div>

      <div className="contributie_block">
        <div>
          <img
            className="contributir_img"
            src={Contributieimg}
            alt="colaborareimg"
          />
        </div>

        <div className="contributie_right">
          <div className="contributie_text_block">
            <div className="contributie_asteptam">
              <h3 className="contributie_asteptam_text">{t("retea_12")}</h3>
            </div>
            <h1 className="contributie_text">{t("retea_13")}</h1>
            <p className="contributie_par_verde">{t("retea_14")}</p>
          </div>
          <div className="contributie_contacts">
            <div className="contributie_info">
              <hr className="linie_contributie" />
              <div className="contributie_infocontainer">
                <img src={IconMail} alt="colaborareimg" />
                <h2 className="contributie_infodron">dronassist@gmail.com</h2>
              </div>
            </div>

            <div className="contributie_info">
              <hr className="linie_contributie" />
              <div className="contributie_infocontainer">
                <img src={IconTelephone} alt="colaborareimg" />
                <h2 className="contributie_infodron">+37369104386</h2>
              </div>
            </div>

            <div className="contributie_info">
              <hr className="linie_contributie" />
              <div className="contributie_infocontainer_contactati">
                <img src={IconNote} alt="colaborareimg" />
                <h2 className="contributie_infodron">{t("retea_15")}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
