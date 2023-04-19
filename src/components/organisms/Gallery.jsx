import React from "react";
import SearchForm from "../molecules/SearchForm";
import Grid from "../molecules/Grid";

const Gallery = () => {
  return (
    <main className="home h-screen bg-gray-300 flex flex-col items-center p-6">
      <div className="home__search flex flex-col gap-6 items-center w-full">
        <h1 className="home__search-title text-3xl">Image Gallery</h1>
        <SearchForm />
      </div>
      <div className="home__grid mt-4 overflow-y-auto">
        <Grid />
      </div>
    </main>
  );
};

export default Gallery;
