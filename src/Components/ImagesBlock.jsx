import React from "react";
import "./ImagesBlock.css";
import ImgBlockOne from "../Img/imgforblock1.png";
import ImgBlockTwo from "../Img/imgforblock2.png";
import YouTube from "react-youtube";

export default function ImagesBlock() {
  const videoUrls = [
    "https://www.youtube.com/watch?v=WeDvNscRRPE",
    "https://www.youtube.com/watch?v=kcc6EMHOKs8&t=20s",
  ];

  const opts = {
    height: "312",
    width: "584",
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      origin: "http://localhost:3000",
    },
  };

  return (
    <div className="MainImg">
      <div className="firsttwo">
        <img className="imgblock" src={ImgBlockOne} alt="Image 1" />
        <YouTube className="videoyt" videoId="WeDvNscRRPE" opts={opts} />
      </div>

      <div className="secondtwo">
        <YouTube className="videoyt2" videoId="kcc6EMHOKs8" opts={opts} />
        <img className="imgblock" src={ImgBlockTwo} alt="Image 2" />
      </div>
    </div>
  );
}
