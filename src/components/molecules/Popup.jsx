import React, { useState, useEffect } from "react";
import Close from "../atoms/Close";
import Size from "../atoms/Size";
import Download from "../atoms/Download";
import { saveAs } from "file-saver";

const Popup = ({ data, close }) => {
  const [size, setSize] = useState(null);
  const [download, setDownload] = useState(false);
  const { id, src } = data;

  useEffect(() => {
    if (download) {
      fetch(
        `https://api.unsplash.com/photos/${id}?client_id=${process.env.REACT_APP_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          const entries = Object.entries(data.urls);
          const url = entries.find((el) => el[0] === size.toLowerCase());
          saveAs(url[1], "image.jpg");
          setDownload(false);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [download]);

  const handleSize = (size) => {
    setSize(size);
  };

  const handleDownload = () => {
    if (!size) {
      alert("Please select a size");
    } else {
      setDownload(true);
    }
  };

  return (
    <div className="popup mt-8 relative flex flex-col justify-around bg-white rounded-lg items-center max-w-lg lg:max-w-2xl w-full h-[34rem]">
      <div className="absolute top-4 right-4">
        <Close close={close} />
      </div>
      <div className="popup__header w-full h-12 mt-2 border-b-2 text-center">
        <h2 className="text-lg">Download Image</h2>
      </div>
      <div className="popup__image h-60 w-60 lg:h-72 lg:w-72">
        <figure className="h-full">
          <img src={src} className="object-cover h-full w-full" />
        </figure>
      </div>
      <span>
        <h3 className="text-base text-center lg:text-lg">
          Select the size you want to download the image in.
        </h3>
      </span>
      <div className="popup__buttons w-full lg:w-3/4 lg:justify-between flex justify-around flex-wrap gap-2">
        <Size size={"Thumb"} handler={handleSize} />
        <Size size={"Small"} handler={handleSize} />
        <Size size={"Regular"} handler={handleSize} />
        <Size size={"Full"} handler={handleSize} />
        <Download handler={handleDownload} />
      </div>
    </div>
  );
};

export default Popup;
