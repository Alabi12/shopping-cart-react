import { useState, useEffect } from "react";

function Product() {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch("http://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);
  return (
    <div>
      <h1>Product Dashboard</h1>
      {JSON.stringify(products)}
    </div>
  );
}

export default Product;
