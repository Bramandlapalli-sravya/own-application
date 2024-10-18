import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductsItem = () => {
  const { id } = useParams();
  console.log(id, "id");

  const [productItem, setProductItem] = useState();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProductItem(res);
      });
  }, []);

  console.log(productItem, "productsItem");

  return (
    <div>
      <h1>Products Items</h1>
      {productItem ? (
        <div key={productItem.id}>
          <h1>{productItem.title}</h1>
          <img
            src={productItem.images}
            width={200}
            height={100}
            alt={productItem.title}
          />
        </div>
      ) : (
        ""
      )}
      ;
    </div>
  );
};

export default ProductsItem;
