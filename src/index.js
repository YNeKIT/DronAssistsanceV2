import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SalesPage from "./Pages/SalesPage";
import ServicesPages from "./Pages/ServicesPages";
import CartPage from "./Pages/CartPage";
import BiologicalTypes from "./Pages/BiologicalTypes";
import AboutUsPage from "./Pages/AboutUsPage";
import reportWebVitals from "./reportWebVitals";
import ReteaPage from "./Pages/ReteaPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import ProdusPage from "./Pages/ProdusPage";
import { Suspense } from "react";
import "./18n";
import { CartContextProvider } from "./CartContext";
import ScrollToTop from "./Components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider>
    <Notifications position="bottom-left" zIndex={1000} />
    <BrowserRouter>
      <ScrollToTop />
      <React.StrictMode>
        <Suspense fallback="loading">
          <CartContextProvider>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/AboutUs" element={<AboutUsPage />} />
              <Route path="/SalesPage" element={<SalesPage />} />
              <Route path="/ServicesPage" element={<ServicesPages />} />
              <Route path="/CartPage" element={<CartPage />} />
              <Route path="/BiologicalTypes" element={<BiologicalTypes />} />
              <Route path="/ReteaPage" element={<ReteaPage />} />
              <Route path="/ProdusPage" element={<ProdusPage />} />
            </Routes>
          </CartContextProvider>
        </Suspense>
      </React.StrictMode>
    </BrowserRouter>
  </MantineProvider>
);

reportWebVitals();
