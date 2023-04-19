import React from "react";

const Card = ({ image }) => {
  return (
    <div className="h-96">
      <figure className="h-full w-full">
        <img src={image} className="object-cover h-full w-full" />
      </figure>
    </div>
  );
};

export default Card;
