import React from "react";
import Dish from "./Dish";
import "./Dishes.css";
import saladImg from "../assets/icons_assets/greek_salad.jpg";
import bruchettaImg from "../assets/icons_assets/bruchetta.svg";
import lemonDessertImg from "../assets/icons_assets/lemon dessert.jpg";

export default function Dishes() {
  const Dishes = [
    {
      id: 1,
      name: "Greek Salad",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: 12.9,
      image: saladImg,
    },
    {
      id: 2,
      name: "Bruschetta",
      description:
        "Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: 5.9,
      image: bruchettaImg,
    },
    {
      id: 3,
      name: "Lemon Dessert",
      description:
        "This comes straight from grandma's recipe book. Every ingredient has been sourced and is as authentic as can be imagined.",
      price: 5.5,
      image: lemonDessertImg,
    },
  ];

  return (
    <section className="dishes-section">
      {Dishes.map((dish) => {
        return <Dish key={dish.id} dish={dish} />;
      })}
    </section>
  );
}
