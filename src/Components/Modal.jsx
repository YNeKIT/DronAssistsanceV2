import React from "react";
import "../Pages/SalesPage.css";
import Done from "../Img/doneanimate.json";
import Lottie from "lottie-react";
export default function Modal({ message, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <div className="doneanimated">
          <Lottie className="Done" animationData={Done} />
        </div>
      </div>
    </div>
  );
}
