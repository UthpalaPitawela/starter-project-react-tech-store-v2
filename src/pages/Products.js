import React from "react";
import { ProductContext } from "../context/products";

export default function Products() {
  const response = React.useContext(ProductContext);
  console.log("response", response);
  return <h1>hello from products page </h1>;
}
