import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Trash from "../Img/trash.svg";
import "./CartPage.css";
import { Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { sendMessage } from "../api/telegram";
import { notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import Lottie from "lottie-react";
import NoItems from "../Img/NoItems.json";
import { useCart } from "../CartContext";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

export default function CartPage() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      phoneNumber: "",
      name: "",
      surname: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email incorect"),
      name: (value) => (value ? null : "Nume incorect"),
      surname: (value) => (value ? null : "Prenume incorect"),
      phoneNumber: (value) =>
        /^\d{9,}$/.test(value) ? null : "Număr incorect",
    },
  });

  const handleSubmit = async ({
    email,
    phoneNumber,
    name,
    surname,
    termsOfService,
  }) => {
    try {
      const itemMessages = cart.map((item) => {
        return `${item.Nume}%0A: ${item.quantity}%0A`;
      });

      const cumparatorSection = [
        "\u{2757}\u{2757}\u{2757}\u{2757}\u{2757}\u{2757}\u{2757}\u{2757} %0A",
        "CUMPARATOR: %0A",
        `Email: ${email}%0A`,
        `Phone Number: ${phoneNumber}%0A`,
        `Name: ${name}%0A`,
        `Surname: ${surname}%0A`,
        `Terms of Service: ${termsOfService ? "Agreed" : "Not Agreed"}%0A`,
      ];

      const produseSection = ["PRODUSE:%0A", ...itemMessages];

      const messageText = cumparatorSection.concat(produseSection).join("\n");

      await sendMessage(messageText);

      notifications.show({
        title: "Cu Success !",
        message: "Comanda dvs a fost plasată cu Succes!",
        color: "green",
      });

      setIsLoading(true);
    } catch (e) {
      form.setFieldError("email", "Error sending data");

      notifications.show({
        title: "Error",
        message: "A apărut o eroare la trimiterea comenzii",
        color: "red",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const { cart, dispatch } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.quantity * item.Preț,
    0
  );

  const formattedTotalPrice = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }).format(totalPrice);

  const onIncrementQuantity = (id) => {
    dispatch({ type: "ADD_TO_CART", item: { id } });
  };

  const onDecrementQuantity = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", item: { id } });
  };

  const onRemoveItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", itemId: id });
  };
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="cartpage">
      <NavBar />
      <div className="mainCart">
        <div className="cardcontainer_left">
          <h1 className="title_cart">{t("cart_page_1")}</h1>
          {cart.length > 0 ? (
            <div className="selected_cards">
              {cart.map((item) => (
                <div className="cart_card" key={item.id}>
                  <div className="carddrone">
                    <img
                      className="cartimg"
                      src={`./imag/Produse/${item.img}`}
                      alt={item.Nume}
                    />
                    <h1 className="carddronetext">{item.Nume}</h1>
                  </div>
                  <div className="btn_cart">
                    <button
                      className="btn_cart_style"
                      onClick={() => onDecrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <h2>{item.quantity}</h2>
                    <button
                      className="btn_cart_style"
                      onClick={() => onIncrementQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn_red"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <img className="trash" src={Trash} alt="Remove" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="noitemsblock">
              <Lottie className="Noitems" animationData={NoItems} />
              <h1 className="noitemstext">{t("cart_page_2")}</h1>
            </div>
          )}
        </div>

        <div className="tabel_container">
          <h1 className="table_title">{t("cart_page_3")}</h1>

          <table className="tabel">
            <thead>
              <tr>
                <th>{t("cart_page_4")}</th>
                <th>{t("cart_page_5")}</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.Nume}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h1 className="table_price">
            {t("cart_page_6")}:
            <span className="span_price">{formattedTotalPrice} EUR</span>
          </h1>

          <div className="factura">
            <h1 className="text_factura">{t("cart_page_7")}</h1>
            <Box maxWidth={640} mx="auto">
              <form
                className="formbase"
                onSubmit={form.onSubmit((values) => handleSubmit(values))}
              >
                <div className="email_validation">
                  <p className="parinput">Email:</p>
                  {form.errors.email && (
                    <div className="error-message">{form.errors.email}</div>
                  )}
                </div>
                <input
                  className="inputFACTURA"
                  withAsterisk
                  label="Email"
                  placeholder="your@email.com"
                  {...form.getInputProps("email")}
                />

                <div className="email_validation">
                  <p className="parinput">Numar:</p>
                  {form.errors.phoneNumber && (
                    <div className="error-message">
                      {form.errors.phoneNumber}
                    </div>
                  )}
                </div>
                <input
                  className="inputFACTURA"
                  label="Phone Number"
                  placeholder="060458899"
                  {...form.getInputProps("phoneNumber")}
                />

                <div className="email_validation">
                  <p className="parinput">Nume:</p>
                  {form.errors.name && (
                    <div className="error-message">{form.errors.name}</div>
                  )}
                </div>
                <input
                  className="inputFACTURA"
                  label="Name"
                  placeholder="Ion"
                  {...form.getInputProps("name")}
                />

                <div className="email_validation">
                  <p className="parinput">Prenume:</p>
                  {form.errors.surname && (
                    <div className="error-message">{form.errors.surname}</div>
                  )}
                </div>
                <input
                  className="inputFACTURA"
                  label="Surname"
                  placeholder="Tataru"
                  {...form.getInputProps("surname")}
                />

                <Group justify="flex-end" mt="md">
                  <Button className="btnform" loading={isLoading} type="submit">
                    {t("cart_page_8")}
                  </Button>
                </Group>
              </form>
            </Box>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
