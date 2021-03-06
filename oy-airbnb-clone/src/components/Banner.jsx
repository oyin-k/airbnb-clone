import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";
import Search from "./Search";

import "./Banner.css";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="banner__info">
        <h1>Go Near</h1>
        <h5>
          Settle in somewhere new. Discover stays to live, work, or just relax.
        </h5>
        <Button onClick={() => history.push("./search")} variant="outlined">
          Explore nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
