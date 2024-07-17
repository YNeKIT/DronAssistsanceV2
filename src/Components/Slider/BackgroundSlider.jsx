import React, { useState, useEffect } from "react";
import "./BackgroundSlider.css"; 
import { useTranslation } from "react-i18next";
import Arrow from "../../Img/arrowhome.svg";
import Lottie from "lottie-react";
import SlideBottom from "../../Img/slideBottom.json";
import { Link } from "react-router-dom";

import VideoBackground from '../../Img/videot10.mp4';

const BackgroundSlider = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showPar, setShowPar] = useState(false);
  const { t } = useTranslation();

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

  return (
    <div className="bg-slider">
      <video className="bg-video" autoPlay loop muted>
        <source src={VideoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-overlay"></div>
      <div className="bg-slider-content">
        <div className={`bg-slider-div ${showTitle ? "bg-slider-show" : ""}`}>
          <h1 className={`bg-slider-title ${showTitle ? "bg-slider-show" : ""}`}>
            {t("hello_container1")}
          </h1>
          <p className={`bg-slider-paragraph ${showPar ? "bg-slider-show" : ""}`}>
            {t("hello_container2")}
          </p>
          <Link to={"/SalesPage"}>
            <button className="bg-slider-buy-drone">
              <p className="bg-slider-buy-drone-text">{t("hello_container3")}</p>
            </button>
          </Link>
        </div>
        <div className="bg-slider-lottie">
          <Lottie className="bg-slider-slidebottom" animationData={SlideBottom} />
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
