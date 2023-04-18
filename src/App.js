import React from "react";
import Grid from "./components/molecules/Grid";
import SearchInput from "./components/atoms/SearchInput";
import Button from "./components/atoms/Button";

const App = () => {
  return (
    <main className="home h-screen bg-gray-300 flex flex-col items-center p-6">
      <div className="home__search flex-1 flex flex-col justify-around items-center w-full">
        <h1 className="home__search-title text-3xl">Image Gallery</h1>
        <form className="home__search-form flex items-center justify-between gap-2">
          <SearchInput />
          <Button />
        </form>
      </div>
      <div className="home__grid mt-4 flex-[6]">
        <Grid />
      </div>
    </main>
  );
};

export default App;
