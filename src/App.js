import React from "react";

import productsdata from "./Products/products.js";
import Products from "./products"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  render() {
    return (
      <div className="App">
        <Products />
      </div>
    );
  }
}

export default App;
