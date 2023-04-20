import React, { useContext } from "react";
import Card from "../atoms/Card";
import { ImagesContext } from "../../App";

const Grid = () => {
  const images = useContext(ImagesContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images &&
        images.map((img) => (
          <Card
            key={img.id}
            src={img.urls.regular}
            alt={img.alt_description}
            id={img.id}
          />
        ))}
    </div>
  );
};

export default Grid;
