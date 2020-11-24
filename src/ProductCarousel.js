import React, { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  carouselContainer: {
    backgroundColor: "white",
    width: "70%",
    margin: "auto",
    padding: "1rem",
  },
  carousel: {
    padding: "1rem",
  },
}));

const ProductItem = ({ product }) => {
  const images = (product.images || []).map((image) => image.href);
  const slides = images.map((image, index) => <img src={image} key={index} />);

  const classes = useStyle();
  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div className={classes.carouselContainer}>
      <Carousel
        value={value}
        onChange={handleChange}
        className={classes.carousel}
        arrows
        infinite
      >
        {slides}
      </Carousel>
      <Dots value={value} onChange={handleChange} number={slides.length} />
    </div>
  );
};

export default ProductItem;
