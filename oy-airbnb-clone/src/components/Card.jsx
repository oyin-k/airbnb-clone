import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

function Card({ id, src, title, description, price }) {
  return (
    <div className="card">
      <Link to={`/details/${id}`} style={linkStyle}>
        <div className="card__image">
          <img src={src} alt="" />
        </div>

        <div className="card__info">
          <h2>{title}</h2>
          <h4>{description}</h4>
          <h3>{price}</h3>
        </div>
      </Link>
    </div>
  );
}

export default Card;
