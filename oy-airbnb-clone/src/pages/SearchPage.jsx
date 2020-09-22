import React, { useState, useEffect } from "react";

import { db } from "../services/firebase";

import { Button } from "@material-ui/core";

import SearchResult from "../components/SearchResult";

import "./SearchPage.css";

function SearchPage() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    console.log("effect");
    const unsub = db.collection("apartments").onSnapshot((snapshot) => {
      const allApartments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setApartments(allApartments);
    });
    return () => {
      console.log("cleanup");
      unsub();
    };
  }, []);

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

      {apartments.map((apartment) => (
        <SearchResult
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
