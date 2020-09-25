import React from "react";
import Skeleton from "react-loading-skeleton";

const div = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
};

const cardInfo = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
};

const h4 = {
  marginTop: "8px",
  marginBottom: "4px",
};

function SkeletonCardHome() {
  return (
    <div style={div}>
      {Array(3)
        .fill()
        .map(() => (
          <div className="card">
            <div className="card__image">
              <Skeleton height={200} width={`100%`} />
            </div>

            <div style={cardInfo}>
              <Skeleton width={80} />
              <Skeleton width={120} style={h4} />
              <Skeleton width={50} />
            </div>
          </div>
        ))}
    </div>
  );
}

export default SkeletonCardHome;
