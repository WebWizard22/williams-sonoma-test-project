import React, { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const ProductItem = ({ product }) => {
  const images = (product.images || []).map((image) => image.href);
  const slides = images.map((image) => <img src={image} />);
  const thumbnails = images.map((image) => <img src={image} width="25%" />);

  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div>
      <Carousel value={value} slides={slides} onChange={handleChange} />
      <Dots
        number={images.length}
        thumbnails={thumbnails}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProductItem;
