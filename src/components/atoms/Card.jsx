import React, { useContext } from "react";
import { ImageData } from "../organisms/Gallery";

const Card = ({ src, alt, id }) => {
  const data = useContext(ImageData);

  const handleClick = () => {
    data(id, src);
  };

  return (
    <div className="h-96 cursor-pointer hover:brightness-75">
      <figure className="h-full w-full">
        <img
          onClick={handleClick}
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
