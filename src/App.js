import React, { useState } from "react";
import { Grid, Modal, Backdrop, Fade, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import data from "./data/index.json";
import ProductItem from "./components/ProductItem";
import ProductCarousel from "./components/ProductCarousel";
import { Helmet } from "react-helmet";

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
  const [products] = useState(data.groups);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const selectProduct = (product) => {
    setOpen(true);
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Product list page</title>
        <meta
          name="Description"
          content="This shows product list with product image, name and price"
        />
      </Helmet>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid xs={12} sm={4} item key={index}>
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
    </>
  );
}

export default App;
