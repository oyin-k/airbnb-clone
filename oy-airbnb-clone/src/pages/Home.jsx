import React from "react";

import Banner from "../components/Banner";
import Card from "../components/Card";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <section className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </section>
      <section className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/0fc40f88-2c64-44a0-af36-2368a6855248.jpg?aki_policy=large"
          title="3 Bedroom Bungalow"
          description="A new built Chalet in a serene estate"
          price="$40/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/840816af-ead6-42e6-9fdb-a6645a289a10.jpg?aki_policy=large"
          title="Penthouse in Maitama"
          description="Amazing penthouse apartment with premium luxury"
          price="$80/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a0188a96-3118-4048-8eb0-89037d978a85.jpg?aki_policy=large"
          title="Luxury 3 Bedroom"
          description="Live like and elder stateman with this apartment"
          price="$100/night"
        />
      </section>
    </div>
  );
}

export default Home;
