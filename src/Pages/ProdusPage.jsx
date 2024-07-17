import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Picatura from "../Img/picatura.svg";
import Cloud from "../Img/cloudicon.svg";
import GeoIcon from "../Img/geoicon.svg";
import Pulverizare from "../Img/pulverizareicon.svg";
import Complectatie from "../Img/complectatieicon.svg";
import Battery from "../Img/batteryicon.svg";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import Modal from "../Components/Modal";
import "./ProdusPage.css";
import ArrowLeft from "../Img/arrow-left.svg";
import { Skeleton } from "@mantine/core";

export default function ProdusPage() {
  const { productId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    axios
      .get(`https://62ac57b7bd0e5d29af209f98.mockapi.io/Produse`)
      .then((res) => {
        const desiredProduct = res.data.find((item) =>
          item.Produse.some((product) => product.id === parseInt(productId))
        );

        if (desiredProduct) {
          const productDetails = desiredProduct.Produse.find(
            (product) => product.id === parseInt(productId)
          );
          setProduct(productDetails);
        } else {
          console.error(`Produs cu id ${productId} nu exista.`);
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch({ type: "ADD_TO_CART", item: product });
      setShowModal(true);
    }
    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };

  return (
    <div className="main_produs_page">
      <NavBar />
      <div className="produsinfo">
        {product ? (
          <div className="imagineprodus">
            <Link to={"/SalesPage"}>
              <button className="btn_produs_back">
                <img src={ArrowLeft} alt="arrowleft" className="arrowleft" />
              </button>
            </Link>

            <img
              className="produs_img"
              src={`../imag/Produse/${product.img}`}
              alt={product.Nume}
            />
          </div>
        ) : (
          <div>
            <Skeleton
              className="skeleton"
              height={380}
              width={360}
              animate={true}
            />
          </div>
        )}

        <div className="caracteristici">
          {product ? (
            <>
              <h1 className="title_product">{product.Nume}</h1>
              <p className="price_product">{product.Preț} EUR</p>
              <hr className="linieprodus" />
              <p className="descriere_product"> Descrierea produsului</p>
              <p className="descriere_product_content">{product.Informații}</p>
              <div className="button_container_produs">
                <button className="produs_btn" onClick={handleAddToCart}>
                  În coș
                </button>
              </div>
            </>
          ) : (
            <div className="skeleton_container">
              <div>
                <Skeleton
                  className="skeleton"
                  height={47}
                  width={420}
                  animate={true}
                />
                <Skeleton
                  className="skeleton"
                  height={38}
                  width={164}
                  animate={true}
                />
                <Skeleton
                  className="skeleton"
                  height={2}
                  width={518}
                  animate={true}
                />
                <Skeleton
                  className="skeleton"
                  height={33}
                  width={280}
                  animate={true}
                />
                <Skeleton
                  className="skeleton"
                  height={108}
                  width={498}
                  animate={true}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="produs_card_container_page">
        <h1 className="produs_title_text">CARACTERISTICI TEHNICE</h1>
        <div className="card_container_product">
          {product ? (
            <>
              <div className="produs_card">
                <img src={Picatura} alt="Picatura" />
                <h2 className="produs_text_big">Rezervor</h2>
                <p className="produs_text_small">{product.Rezervor}</p>
              </div>
              <div className="produs_card">
                <img src={GeoIcon} alt="Picatura" />
                <h2 className="produs_text_big">Eficiența</h2>
                <p className="produs_text_small">{product.Eficienta}</p>
              </div>

              <div className="produs_card">
                <img src={Cloud} alt="cloud" />
                <h2 className="produs_text_big">Platformă Cloud</h2>
                <p className="produs_text_small">{product.Platforma}</p>
              </div>
              <div className="produs_card">
                <img src={Pulverizare} alt="Picatura" />
                <h2 className="produs_text_big">Pulverizare</h2>
                <p className="produs_text_small">{product.Pulverizare}</p>
              </div>
              <div className="produs_card">
                <img src={Complectatie} alt="Picatura" />
                <h2 className="produs_text_big">Complectație</h2>
                <p className="produs_text_small">{product.Complectatie}</p>
              </div>
              <div className="produs_card">
                <img src={Battery} alt="Picatura" />
                <h2 className="produs_text_big">Acumulator</h2>
                <p className="produs_text_small">{product.Acumulator}</p>
              </div>
            </>
          ) : (
            <div className="loading">
              <h1> Loading... </h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
      {showModal && (
        <Modal
          message="Produsul a fost adaugat cu succes!"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}









