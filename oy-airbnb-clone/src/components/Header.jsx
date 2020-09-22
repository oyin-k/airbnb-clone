import React from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

import "./Header.css";
import logo from "../airbnblogo.png";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img src={logo} alt="" className="header__icon" />
        </Link>
      </div>

      <div className="header__center">
        <input type="text" placeholder="Start your search" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <div className="header__rightLanguage">
          <LanguageIcon />
          <ExpandMoreIcon />
        </div>
        <div className="header__rightAvatar">
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
