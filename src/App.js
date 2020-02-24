import React from "react";
import logo from "./logo.svg";
import "./App.css";
import productsdata from "./Products/products(.js).txt";

function App() {
  console.log(productsdata);
  return (
    <div className="App">
      {/* {productsdata.map(product => (
        <div key={product.id}>
          <h1>{product.title}</h1>
        </div>
      ))} */}
    </div>
  );
}

export default App;
