import React from "react";
import { Link } from "react-router-dom";

import "./SearchResult.css";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

function SearchResult({
  img,
  id,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <Link to={`/details/${id}`} style={linkStyle}>
        <img src={img} alt="" />
        <FavoriteBorderIcon className="searchResult__heart" />
        <div className="searchResult__info">
          <div className="searchResult__infoTop">
            <p>{location}</p>
            <h3>{title}</h3>
            <p className="searchResult__infoTopDivider">___</p>
            <p>{description}</p>
          </div>
          <div className="searchResult__infoBottom">
            <div className="searchResult__stars">
              <StarIcon className="searchResult__star" />
              <p>
                <strong>{star}</strong>
              </p>
            </div>
            <div className="searchResult__price">
              <h2>{price}/night</h2>
              <p>{total} total</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchResult;
