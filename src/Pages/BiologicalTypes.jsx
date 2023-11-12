import React from "react";
import "./BiologicalTypes.css";
import NavBar from "../Components/NavBar";
import TichoGramma from "../Components/TichoGramma";
import AvantajeEntomo from "../Components/AvantajeEntomo";
import Footer from "../Components/Footer";
import CapcaneInt from "../Components/CapcaneInt";
export default function BiologicalTipes() {
  return (
    <div className="biologicalmain">
      <NavBar />
      <TichoGramma />
      <AvantajeEntomo />
      <CapcaneInt />
      <Footer />
    </div>
  );
}
