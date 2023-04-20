import React from "react";

const Card = ({ src, alt, id }) => {
  return (
    <div className="h-96">
      <figure className="h-full w-full">
        <img
          src={src}
          alt={alt}
          id={id}
          className="object-cover h-full w-full"
        />
      </figure>
    </div>
  );
};

export default Card;
