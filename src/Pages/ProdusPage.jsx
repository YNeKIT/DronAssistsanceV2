import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Picatura from "../Img/picatura.svg";
import T30 from "../Img/DJI-T30-1.png";
import { useParams } from "react-router-dom";

export default function ProdusPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  return (
    <div className="main_produs_page">
      <NavBar />
      <div className="produsinfo">
        <div className="imagineprodus">
          <img className="produs_img" src={T30} alt="t30img" />
        </div>
        <div className="caracteristici">
          {product ? (
            <>
              <h1 className="title_product">title</h1>
              <p className="price_product"> 123123 EUR</p>
              <p className="descriere_product">Descrierea produsului</p>
              <p className="info_product">info</p>
              <button className="produs_btn">În coș</button>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <div className="produs_card_container_page">
        <h1 className="produs_title_text">CARACTERISTICI TEHNICE</h1>
        <div className="produs_card">
          <img src={Picatura} alt="Picatura" />
          <h2 className="produs_text_big">Rezervor</h2>
          <p className="produs_text_small">
            Capacitatea rezervorului de 30 litri
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
