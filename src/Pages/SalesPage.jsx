import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Lottie from "lottie-react";
import Card from "../Components/Card";
import Modal from "../Components/Modal";
import Lupa from "../Img/lupa.svg";
import NoData from "../Img/Animation - 1695719806512.json";
import { useCart } from "../CartContext";
import { useTranslation } from "react-i18next";
import "./SalesPage.css";

export default function SalesPage() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { cart, dispatch } = useCart();

  useEffect(() => {
    axios
      .get("https://62ac57b7bd0e5d29af209f98.mockapi.io/Produse")
      .then((res) => {
        setItems(res.data[0].Produse);
      });
  }, []);

  const handleClick = (item) => {
    dispatch({ type: "ADD_TO_CART", item });
    setSuccessMessage("Produsul a fost adaugat cu succes!");
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 2500);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredItems = items.filter((item) =>
    item.Nume?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const { t, i18n } = useTranslation();

  return (
    <div className="salesmain">
      <NavBar />
      {showModal && (
        <Modal message={successMessage} onClose={() => setShowModal(false)} />
      )}

      <h1 className="PageTitle">{t("sales_page_1")}</h1>
      <div className="btnandinput">
        <input
          className="inputCostum"
          placeholder={t("sales_page_5")}
          value={searchQuery}
          onChange={handleSearchChange}
        ></input>
        <button className="btn_input">
          <img className="lupabtn" src={Lupa} alt="Search" />
        </button>
      </div>
      <h2 className="rezultate">
        {t("sales_page_2")} "{searchQuery}"
      </h2>

      {currentItems.length > 0 ? (
        <div className="cardcontainer">
          {currentItems.map((item, index) => (
            <Card
              t={t}
              item={item}
              key={index}
              name={item.Nume}
              price={item.Preț}
              info={item.Informații}
              img={`./imag/Produse/${item.img}`}
              handleClick={handleClick}
            />
          ))}
        </div>
      ) : (
        <div className="centered-container">
          <div className="text-center">
            <h1 className="nofoundtext">{t("sales_page_3")}...</h1>
          </div>
          <div className="lottie-center">
            <Lottie className="NoFound" animationData={NoData} />
          </div>
        </div>
      )}

      <div className="pagination">
        {Array(Math.ceil(filteredItems.length / itemsPerPage))
          .fill()
          .map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : "btnpag"}
            >
              {index + 1}
            </button>
          ))}
      </div>

      <Footer />
    </div>
  );
}
