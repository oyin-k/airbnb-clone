import React from "react";
import Skeleton from "react-loading-skeleton";

const pStyle = {
  marginLeft: "10px",
};

function SkeletonCard() {
  return (
    <div>
      {Array(4)
        .fill()
        .map((item, index) => (
          <div className="searchResult" key={index}>
            <Skeleton height={200} width={350} />
            <Skeleton
              className="searchResult__heart"
              circle={true}
              height={20}
              width={20}
            />
            <div className="searchResult__info">
              <div className="searchResult__infoTop">
                <p>
                  <Skeleton width={`60%`} />
                </p>
                <h3>
                  <Skeleton height={36} width={`80%`} />
                </h3>
                <p className="searchResult__infoTopDivider">___</p>
                <p>
                  <Skeleton width={`90%`} />
                </p>
              </div>
              <div className="searchResult__infoBottom">
                <div className="searchResult__stars">
                  <Skeleton
                    className="searchResult__star"
                    circle={true}
                    height={20}
                    width={20}
                  />
                  <p style={pStyle}>
                    <strong>
                      <Skeleton width={50} />
                    </strong>
                  </p>
                </div>
                <div className="searchResult__price">
                  <h2>
                    <Skeleton width={80} />
                  </h2>
                  <p>
                    <Skeleton width={50} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SkeletonCard;
