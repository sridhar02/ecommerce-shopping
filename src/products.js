import React, { Component, Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

import productsdata from "./Products/products.js";

const productStyles = theme => ({
  name: {
    marginTop: theme.spacing(0.5),
    height: theme.spacing(4.5),
    display: "flex",
    marginLeft: "10px",
    maxWidth: "120px"
  },
  product: {
    marginBottom: "15px"
  },
  image: {
    margin: "10px",
    height: "100px",
    width: "120px"
  }
});

class _Product extends Component {
  render() {
    const { classes, product, cartProducts } = this.props;
    console.log(product.src_2);
    const addCart = <Button>Add to Cart</Button>
    return (
      <div className={classes.product}>
        <div>
          <img className={classes.image} src={product.src_1} />
        </div>
        <Typography variant="body2" className={classes.name}>
          {product.title}
        </Typography>
        <Typography variant="body2" className={classes.name}>
          ₹{product.price}
        </Typography>
        {addCart}
      </div>
    );
  }
}

const Product = withStyles(productStyles)(_Product);

const productsStyles = theme => ({
  section: {
    margin: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
  }
});

class _Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products || [],
      cartProducts: props.cartProducts || []
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.section}>
          {productsdata.map(product => (
            <Product
              product={product}
              key={product.id}
              fetchCart={this.fetchCart}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

const Products = withStyles(productsStyles)(_Products);

export default Products;
