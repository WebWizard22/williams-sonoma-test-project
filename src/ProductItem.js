import React from "react";
import { Card, CardHeader, CardMedia, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  image: {
    height: 0,
    paddingTop: "56.26%",
  },
}));

const ProductItem = ({ product, selectProduct }) => {
  const classes = useStyle();
  const { hero, name, price = { selling: 0 } } = product;

  return (
    <Card>
      <CardHeader title={name} />
      <CardMedia
        image={hero.href}
        className={classes.image}
        onClick={() => selectProduct(product)}
      />
      <CardContent>${price.selling}</CardContent>
    </Card>
  );
};

export default ProductItem;
