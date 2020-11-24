import React, { useState, useEffect } from "react";
import { Grid, Modal, Backdrop, Fade, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import data from "./data/index.json";
import ProductItem from "./ProductItem";
import ProductCarousel from "./ProductCarousel";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
  },
  root: {
    paddingTop: "5rem",
  },
}));

function App() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    (async () => {
      setProducts(data.groups);
    })();
  }, []);

  const selectProduct = (product) => {
    setOpen(true);
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid xs={12} sm={4} item>
            <ProductItem product={product} selectProduct={selectProduct} />
          </Grid>
        ))}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            {selectedProduct && <ProductCarousel product={selectedProduct} />}
          </Fade>
        </Modal>
      </Grid>
    </Container>
  );
}

export default App;
