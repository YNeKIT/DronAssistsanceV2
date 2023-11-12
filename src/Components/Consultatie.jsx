import React, { useState } from "react";
import "./Consultatie.css";
import Telefon from "../Img/platformsimg.png";
import Mail from "../Img/mailicon.svg";
import { useTranslation } from "react-i18next";
import { notifications } from "@mantine/notifications";
import { sendMessage } from "../api/telegram";

export default function Consultatie() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      !/^\d{9,}$/.test(formData.phoneNumber) ||
      !/^\S+@\S+$/.test(formData.email) ||
      formData.message === ""
    ) {
      notifications.show({
        title: "Validation Error",
        message: "Please complete all fields correctly",
        color: "red",
      });
      return;
    }

    try {
      const messageText = ` \u{1F4E9}\u{1F4E9}\u{1F4E9}\u{1F4E9}\u{1F4E9}%0AName: ${formData.name}%0A Phone Number: ${formData.phoneNumber} %0A Mail: ${formData.email} %0A Message: ${formData.message}  `;

      await sendMessage(messageText);

      notifications.show({
        title: "Cu Success !",
        message: "Mesajul dvs a fost trimis cu succes!!",
        color: "green",
      });

      setIsLoading(true);
    } catch (e) {
      notifications.show({
        title: "Error",
        message: "A apărut o eroare la trimiterea mesajului",
        color: "red",
      });
    }
  };

  return (
    <div className="ConsultatieMain">
      <div className="consultatieleft">
        <div className="contactetext">
          <h3 className="textcontact">{t("servicii_consultatie_1")}</h3>
        </div>

        <h1 className="interesat">{t("servicii_consultatie_2")}</h1>
        <h1 className="trimitemesaj">{t("servicii_consultatie_3")}</h1>

        <div className="telefon">
          <img className="platformsimg" alt="platformsimg" src={Telefon} />
          <div>
            <p className="telefonpar">{t("servicii_consultatie_4")}</p>
            <p className="telefonpar">+37369104386</p>
          </div>
        </div>

        <div className="telefon">
          <img src={Mail} alt="img" />
          <div>
            <p className="telefonpar">{t("servicii_consultatie_5")}</p>
            <p className="telefonpar">droneassist@.com</p>
          </div>
        </div>
      </div>

      <form className="consultatieright" onSubmit={handleSubmit}>
        {/* Input fields */}
        <div className="inputcontainer">
          <div className="inputleft">
            <p className="inputname1">{t("servicii_consultatie_6")}* </p>
            <input
              className="input-name"
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputright">
            <p className="inputname2">{t("servicii_consultatie_7")}* </p>
            <input
              type="text"
              name="phoneNumber"
              className="input-telefon"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="inputright">
          <p className="inputname3">{t("servicii_consultatie_8")}* </p>
          <input
            className="input-email"
            name="email"
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <p className="inputname1">{t("servicii_consultatie_9")}*</p>
        <input
          className="inputmare"
          name="message"
          type="text"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <button className="btntrimite" type="submit">
          <h3 className="textmesaj">{t("servicii_consultatie_10")}</h3>
        </button>
      </form>
    </div>
  );
}
