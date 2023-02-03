import React from "react";
import { BiCart, BiHeart, BiSearch } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <nav className="app__navbar">
      {/* Logo */}
      <div className="app__navbar-logo">
        <a href="index.html" className="nav__logo">
          buzzbuzz
        </a>
      </div>

      <ul className="app__navbar-links">
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="/Products">
          <li>shop</li>
        </Link>
        <Link to="/contact">
          <li>contact</li>
        </Link>
        <Link to="/about">
          <li>about</li>
        </Link>
      </ul>

      <ul className="app__navbar-buttons">
        <div className="search">
          <Link to="/search">
            <BiSearch />
          </Link>
        </div>
        <div className="account">
          <Link to="/login">
            <HiOutlineUserCircle />
          </Link>
        </div>

        <div className="favourites">
          <Link to="/favourites">
            <BiHeart />
          </Link>
          <div className="num">2</div>
        </div>

        <div className="cart">
          <Link to="/cart">
            <BiCart />
          </Link>
          <div className="num">
            <span>3</span>
          </div>
        </div>
      </ul>

      {/* Navigation menu */}
    </nav>
  );
};

export default Header;
