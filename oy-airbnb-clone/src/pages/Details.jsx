import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { db } from "../services/firebase";

import StarIcon from "@material-ui/icons/Star";

import "./Details.css";
import SkeletonDetails from "../components/SkeletonDetails";

const Details = () => {
  const [singleApartment, setSingleApartment] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const unsub = db.collection("apartments").onSnapshot(
      (snapshot) => {
        const allApartments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const apartment = allApartments.find((obj) => {
          return obj.id === id && obj;
        });
        setSingleApartment(apartment);
        setLoading(false);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => {
      unsub();
    };
  }, [id]);

  return (
    <section>
      {loading && <SkeletonDetails />}
      {!loading && (
        <div className="apartment-details">
          <div className="apartment-details__top">
            <h1>{singleApartment.title}</h1>
            <div className="apartment-details__top-info">
              <div className="apartment-details__top-stars">
                <StarIcon />
                <p>
                  <strong>{singleApartment.star}</strong>
                </p>
              </div>
              ·
              <p className="apartment-details__top-location">
                {singleApartment.location}
              </p>
            </div>
          </div>
          <div className="images">
            <div className="image1">
              <img src={singleApartment.image} alt="" />
            </div>
            <div className="image2">
              <img src={singleApartment.image} alt="" />
            </div>
            <div className="image3">
              <img src={singleApartment.image} alt="" />
            </div>
            <div className="image4">
              <img src={singleApartment.image} alt="" />
            </div>
            <div className="image5">
              <img src={singleApartment.image} alt="" />
            </div>
          </div>
          <div className="apartment-details__bottom">
            <div className="apartment-details__bottom-info">
              <h2>Hosted by Eniola Adebayo</h2>
              <p>{singleApartment.description}</p>
            </div>

            <div className="apartment-details__bottom-price">
              <p>
                <span>{singleApartment.price}</span>/night
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
