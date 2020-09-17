import React from "react";

import { Button } from "@material-ui/core";

import SearchResult from "../components/SearchResult";

import "./SearchPage.css";

function SearchPage() {
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
      <SearchResult
        img="https://a0.muscache.com/im/pictures/840816af-ead6-42e6-9fdb-a6645a289a10.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Stay in this spacious Luxury house"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathroom · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/840816af-ead6-42e6-9fdb-a6645a289a10.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Stay in this spacious Luxury house"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathroom · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/840816af-ead6-42e6-9fdb-a6645a289a10.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Stay in this spacious Luxury house"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathroom · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/840816af-ead6-42e6-9fdb-a6645a289a10.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Stay in this spacious Luxury house"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathroom · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/840816af-ead6-42e6-9fdb-a6645a289a10.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Stay in this spacious Luxury house"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathroom · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/840816af-ead6-42e6-9fdb-a6645a289a10.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Stay in this spacious Luxury house"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathroom · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/840816af-ead6-42e6-9fdb-a6645a289a10.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Stay in this spacious Luxury house"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathroom · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
    </div>
  );
}

export default SearchPage;
