import React from "react";
import mainLogo from "../assets/icons_assets/Logo.svg";
import "./Nav.css";

export default function Nav() {
    return <nav className="padding-primary">
        <a href="/" className="logo-link">
            <img src={mainLogo} alt="logo" className="logo"/>
        </a>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/menu">Menu</a>
            </li>
            <li>
                <a href="/reservation">Reservation</a>
            </li>
            <li>
                <a href="/order-online">Order Online</a>
            </li>

            <li>
                <a href="/login">Login</a>
            </li>
        </ul>
  </nav>;
}
