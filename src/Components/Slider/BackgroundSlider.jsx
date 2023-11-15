import React, { useState, useEffect } from "react";
import "./BackgroundSlider.css"; // Import your CSS file
import { useTranslation } from "react-i18next";
import Arrow from "../../Img/arrowhome.svg";
import Lottie from "lottie-react";
import SlideBottom from "../../Img/slideBottom.json";
import { Link } from "react-router-dom";

const BackgroundSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [showPar, setShowPar] = useState(false);

  const selectImage = (index) => {
    console.log("Clicked index:", index);
    setCurrentIndex(index);
  };

  const renderButtons = () => {
    return images.map((_, index) => (
      <button
        key={index}
        onClick={() => selectImage(index)}
        className={currentIndex === index ? "active" : ""}
      ></button>
    ));
  };

  useEffect(() => {
    const titleDelay = setTimeout(() => {
      setShowTitle(true);
    }, 0);

    const parDelay = setTimeout(() => {
      setShowPar(true);
    }, 500);

    return () => {
      clearTimeout(titleDelay);
      clearTimeout(parDelay);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  const { t, i18n } = useTranslation();

  return (
    <div className="background-slider">
      <div
        className="slider-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className={`divmare ${showTitle ? "show" : ""}`}>
          <h1 className={`title_slider ${showTitle ? "show" : ""}`}>
            {t("hello_container1")}
          </h1>
          <p className={`par_slider ${showPar ? "show" : ""}`}>
            {t("hello_container2")}
          </p>
          <Link to={"/SalesPage"}>
            <button className="cumpara_drona">
              <p className="btn_text_cumpara">{t("hello_container3")}</p>{" "}
            </button>
          </Link>
        </div>
        <div className="lottie_slider">
          <Lottie className="slidebottom" animationData={SlideBottom} />
        </div>
        <div className="button-container">{renderButtons()}</div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
