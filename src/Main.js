import React from "react";
import "./Main.css";
import Dishes from "./components/Dishes";

export default function Main() {
  return (
    <main className="padding-primary">
      <section className="special-section">
        <h3>This Week Special</h3>
        <button className="btn btn-primary">Online Menu</button>
      </section>
      <Dishes />
    </main>
  );
}
