import React from "react";
import "../Pages/SalesPage.css";
import { Link } from "react-router-dom";

export default function Card({
  t,
  name,
  price,
  info,
  img,
  handleClick,
  item,
  index,
}) {
  return (
    <div className="card">
       <Link
              to={{
                pathname: `/product/${item.id}`, 
                state: { product: item },
              }}
              key={item.id}
            >
      <img className="imgcard" src={img} alt={name} />
      </Link>
      <h1 className="cardname">{name}</h1>
      <p className="cardprice">{price} EUR</p>
      <button onClick={() => handleClick(item)} className="cardbtn">
        {t("sales_page_4")}
      </button>
    </div>
  );
}
