import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">

      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="" className="navbar-logo" />
      </Link>

      {/* Menu */}
      <ul className="navbar-menu">

        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          <Link to="/">Home</Link>
        </li>

        <li
          className={menu === "Menu" ? "active" : ""}
        >
          <ScrollLink
            to="explore-menu"
            smooth={true}
            duration={500}
            onClick={() => setMenu("Menu")}
          >
            Menu
          </ScrollLink>
        </li>

        <li
          className={menu === "Mobile" ? "active" : ""}
        >
          <ScrollLink
            to="app-download"
            smooth={true}
            duration={500}
            onClick={() => setMenu("Mobile")}
          >
            Mobile-App
          </ScrollLink>
        </li>

        <li
          className={menu === "Contact" ? "active" : ""}
        >
          <ScrollLink
            to="footer"
            smooth={true}
            duration={500}
            onClick={() => setMenu("Contact")}
          >
            Contact Us
          </ScrollLink>
        </li>

      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div
            className={getTotalCartAmount() === 0 ? "" : "dot"}
          ></div>
        </div>

        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>

    </div>
  );
};

export default Navbar;