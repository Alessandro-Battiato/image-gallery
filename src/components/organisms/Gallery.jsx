import React, { createContext, useState } from "react";
import SearchForm from "../molecules/SearchForm";
import Grid from "../molecules/Grid";
import Popup from "../molecules/Popup";

export const ImageData = createContext(null);

const Gallery = () => {
  const [image, setImage] = useState();

  const handleImageClick = (id, src) => {
    setImage({ id, src });
  };

  const handleClose = () => {
    setImage(null);
  };

  return (
    <ImageData.Provider value={handleImageClick}>
      <main className="gallery h-screen bg-gray-300 flex flex-col items-center p-6">
        <div className="gallery__search flex flex-col gap-6 items-center w-full">
          <h1 className="gallery__search-title text-3xl">Image Gallery</h1>
          <SearchForm />
        </div>
        <div className="gallery__grid mt-4 overflow-y-auto">
          <Grid />
        </div>
        {image && (
          <div className="gallery__download z-10 bg-black/40 fixed top-0 w-full h-full flex justify-center">
            <Popup data={image} close={handleClose} />
          </div>
        )}
      </main>
    </ImageData.Provider>
  );
};

export default Gallery;
