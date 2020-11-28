import React, { useState } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  carouselContainer: {
    backgroundColor: "white",
    width: (props) => (props.isMobileScreen ? "320px" : "768px"),
    margin: "auto",
    padding: "1rem",
  },
  carousel: {
    padding: "1rem",
  },
}));

const ProductItem = ({ product }) => {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const images = (product.images || []).map((image) => image.href);
  const slides = images.map((image, index) => (
    <img
      src={image}
      key={index}
      alt="Loading..."
      width={isMobileScreen ? "100%" : null}
    />
  ));

  const classes = useStyle({ isMobileScreen });
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
        itemWidth={isMobileScreen ? 250 : 700}
      >
        {slides}
      </Carousel>
      <Dots value={value} onChange={handleChange} number={slides.length} />
    </div>
  );
};

export default ProductItem;
