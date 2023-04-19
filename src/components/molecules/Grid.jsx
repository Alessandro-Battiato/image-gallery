import React from "react";
import Card from "../atoms/Card";
import impostor from "../../impostor.jpg";
import cat from "../../cat.PNG";

const Grid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card image={cat} />
      <Card image={impostor} />
      <Card image={cat} />
      <Card image={cat} />
      <Card image={impostor} />
      <Card image={impostor} />
    </div>
  );
};

export default Grid;
