import React, { useEffect, useState } from "react";
import axios from 'axios';

// Define a type for the product
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

function Contact() {
  const [products, setProducts] = useState<Product[]>([]);

  // Use axios to fetch products
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Add empty array to run useEffect only once

  return (
    <div className="grid grid-cols-4 w-full h-full">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col items-center gap-3">
          <div>{product.title}</div>
          <img src={product.image} style={{ height: '200px', maxWidth: '300px' }} alt={product.title} />
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  );
}

export default Contact;
