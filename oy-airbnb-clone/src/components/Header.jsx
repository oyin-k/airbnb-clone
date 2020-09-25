import React from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";

import "./Header.css";
import logo from "../airbnblogo.png";
import RightNav from "./RightNav";
import Burger from "./Burger";

function Header({ value, handleChange }) {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img src={logo} alt="" className="header__icon" />
        </Link>
      </div>

      <div className="header__center">
        <input
          type="text"
          placeholder="Start your search"
          value={value}
          onChange={handleChange}
        />
        <SearchIcon />
      </div>
      <div className="header__right">
        <Burger />
      </div>
    </div>
  );
}

export default Header;
