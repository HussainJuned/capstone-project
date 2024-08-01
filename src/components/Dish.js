import React from "react";
import "./Dish.css";
import deliveryIcon from "../assets/icons_assets/Basket.svg";
export default function Dish({ dish }) {
  return (
    <article className="card dish">
      <img src={dish.image} alt={dish.name} className="dish-img" />
      <div className="dish-info">
        <div>
          <div className="dish-heading">
            <h4>{dish.name}</h4>
            <p>${dish.price}</p>
          </div>
          <p>{dish.description}</p>
        </div>
        <button className="btn btn-primary">
          Add to Cart
          <img src={deliveryIcon} alt="cart" className="cart-icon" />
        </button>
      </div>
    </article>
  );
}
