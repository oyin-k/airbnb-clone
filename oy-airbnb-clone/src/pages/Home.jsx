import React from "react";

import Banner from "../components/Banner";
import Card from "../components/Card";

import "./Home.css";
import SkeletonCardHome from "../components/SkeletonCardHome";

function Home({ topApartments, loading }) {
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
        {loading && <SkeletonCardHome />}
        {!loading &&
          topApartments.map((topApartment) => (
            <Card
              key={topApartment.id}
              src={topApartment.image}
              title={topApartment.title}
              description={topApartment.description}
              price={topApartment.price}
            />
          ))}
      </section>
    </div>
  );
}

export default Home;
