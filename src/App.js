import React, { useState, useEffect, createContext } from "react";
import Gallery from "./components/organisms/Gallery";

export const QueryContext = createContext(null);
export const ImagesContext = createContext(null);

const App = () => {
  const [query, setQuery] = useState(null);
  const [images, setImages] = useState();

  useEffect(() => {
    if (query) {
      fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=15&client_id=${process.env.REACT_APP_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setImages(data.results);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [query]);

  const handleQuery = (value) => {
    setQuery(value);
  };

  return (
    <QueryContext.Provider value={handleQuery}>
      <ImagesContext.Provider value={images}>
        <Gallery />
      </ImagesContext.Provider>
    </QueryContext.Provider>
  );
};

export default App;
