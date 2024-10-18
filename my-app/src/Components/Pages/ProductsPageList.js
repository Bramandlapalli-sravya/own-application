import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ProductsPageList = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.products);
        setproducts(res.products);
      });
  }, []);

  return (
    <div>
      <h1>Products Page List</h1>
      {/* <div className="grid grid-cols-3"> */}
        {products.map((product) => {
          return (
            <div key={product.id} className="flex flex-col">
              <h1>{product.title}</h1>
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.images}
                  width={200}
                  height={100}
                  alt={product.title}
                />
              </Link>
            </div>
          );
        })}
      </div>
    // </div>
  );
};

export default ProductsPageList;
