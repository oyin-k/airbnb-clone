import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonDetails() {
  return (
    <div className="apartment-details">
      <div className="apartment-details__top">
        <Skeleton width={`50%`} />
        <div className="apartment-details__top-info">
          <div className="apartment-details__top-stars">
            <Skeleton circle={true} height={20} width={20} />
            <p>
              <Skeleton width={20} />
            </p>
          </div>
          ·
          <p className="apartment-details__top-location">
            <Skeleton width={40} />
          </p>
        </div>
      </div>
      <div className="images">
        <div className="image1">
          <Skeleton height={380} width={`100%`} />
        </div>
        <div className="image2">
          <Skeleton height={182} width={`100%`} />
        </div>
        <div className="image3">
          <Skeleton height={182} width={`100%`} />
        </div>
        <div className="image4">
          <Skeleton height={182} width={`100%`} />
        </div>
        <div className="image5">
          <Skeleton height={182} width={`100%`} />
        </div>
      </div>
      <div className="apartment-details__bottom">
        <div className="apartment-details__bottom-info">
          <Skeleton width={100} />
          <Skeleton width={200} />
        </div>

        <div className="apartment-details__bottom-price">
          <p>
            <Skeleton width={40} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkeletonDetails;
