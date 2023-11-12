import React from "react";
import Instagram from "../Img/instagram.svg";
import FaceBook from "../Img/facebook.svg";
import Youtube from "../Img/youtube.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialmedia">
        <img src={Instagram}></img>
        <img src={FaceBook}></img>
        <img src={Youtube}></img>
      </div>

      <hr className="linie" />
    </div>
  );
}
