import React from "react";
import dish from "../assets/icons_assets/restauranfood.jpg";
import "./Header.css";

export default function Header() {
  return (
    <header className="padding-primary">
      <section className="description">
        <h1>Little Lemon</h1>
        <h2>Restaurant</h2>
        <p>
          We are family owned business. We serve the best food in town. We have
          been serving the community for over 10 years.
        </p>
        <button className="btn btn-primary">Reserve a Table</button>
      </section>
      <section className="overflow-img-container">
        <img src={dish} alt="dish" className="overflow-img" />
      </section>
    </header>
  );
}
