import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { db } from "../services/firebase";

import StarIcon from "@material-ui/icons/Star";

const StyledDetails = styled.div``;

const Details = () => {
  const [singleApartment, setSingleApartment] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // setLoading(true);
    const unsub = db.collection("apartments").onSnapshot(
      (snapshot) => {
        const allApartments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(allApartments);
        const apartment = allApartments.find((obj) => {
          return obj.id === id && obj;
        });
        setSingleApartment(apartment);
        // setLoading(false);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => {
      console.log("cleanup");
      unsub();
    };
  }, [id]);

  return (
    <StyledDetails>
      <div className="top">
        <h1>{singleApartment.title}</h1>
        <div className="top__info">
          <div className="top__stars">
            <StarIcon />
            <p>
              <strong>{singleApartment.star}</strong>
            </p>
          </div>
          <p>{singleApartment.location}</p>
        </div>
      </div>
      <div className="images"></div>
      <div className="bottom">
        <h2>{singleApartment.description}</h2>

        <div className="bottom__price">
          <p>{singleApartment.price}</p>
        </div>
      </div>
    </StyledDetails>
  );
};

export default Details;
