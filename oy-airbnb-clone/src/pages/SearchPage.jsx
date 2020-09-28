import React from "react";

import { Button } from "@material-ui/core";

import SearchResult from "../components/SearchResult";
import SkeletonCard from "../components/SkeletonCardSearch";

import "./SearchPage.css";

function SearchPage({ apartments, loading }) {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 August to 30 August · 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      {loading && <SkeletonCard />}
      {!loading &&
        apartments.map((apartment) => (
          <SearchResult
            key={apartment.id}
            id={apartment.id}
            img={apartment.image}
            location={apartment.location}
            title={apartment.title}
            description={apartment.description}
            star={apartment.star}
            price={apartment.price}
            total={apartment.total}
          />
        ))}
    </div>
  );
}

export default SearchPage;
