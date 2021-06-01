import React from "react";
import Profil from "./Profil/Profil";
import Cart from "./Cart/index.js";

import { Link } from "react-router-dom";

import "./Menu.scss";
import logo from "../../images/popnrestblack.png";

class Menu extends React.Component {
  render() {
    return (
      <nav>
        <div class="content">
          <img className="logo_menu" src={logo} alt="logo_popnrest" />
          <Cart />
          <Profil />
          <ul>
            <li>
              <Link to="/oldstreet">OLDSTREET</Link>
            </li>
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <Link to="https://medium.com/@popnrest">BLOG</Link>
            </li>
            <li>
              <Link to="https://popnrest.com/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="https://popnrest.com/property">PROPERTY</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
