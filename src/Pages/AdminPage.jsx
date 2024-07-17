import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import "./AdminPage.css";
import Products from "../AdminComp/Products";
import Offers from "../AdminComp/Offers";
import AddEvents from "../AdminComp/AddEvents";
import AddItems from "../AdminComp/AddItems";
import Analytics from "../AdminComp/Analytics";

export default function AdminPage() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("offers");

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "offers":
        return <Offers />;
      case "products":
        return <Products />;
      case "AddItems":
        return <AddItems />;
      case "AddEvents":
        return <AddEvents />;
      case "Analytics":
        return <Analytics />;
      default:
        return <Offers />;
    }
  };

  return (
    <div className="admin-page">
      <NavBar />
      <div className="admin-container">
        <div className="admin-sidebar">
          <button
            className={`admin-menu-button ${
              selectedMenuItem === "offers" ? "active" : ""
            }`}
            onClick={() => setSelectedMenuItem("offers")}
          >
            Offers
          </button>
          <button
            className={`admin-menu-button ${
              selectedMenuItem === "products" ? "active" : ""
            }`}
            onClick={() => setSelectedMenuItem("products")}
          >
            Products
          </button>
          <button
            className={`admin-menu-button ${
              selectedMenuItem === "AddEvents" ? "active" : ""
            }`}
            onClick={() => setSelectedMenuItem("AddEvents")}
          >
            Add Events
          </button>
          <button
            className={`admin-menu-button ${
              selectedMenuItem === "AddItems" ? "active" : ""
            }`}
            onClick={() => setSelectedMenuItem("AddItems")}
          >
            Add Items
          </button>
          <button
            className={`admin-menu-button ${
              selectedMenuItem === "Analytics" ? "active" : ""
            }`}
            onClick={() => setSelectedMenuItem("Analytics")}
          >
            Analytics
          </button>
        </div>
        <div className="admin-content">{renderContent()}</div>
      </div>
    </div>
  );
}
