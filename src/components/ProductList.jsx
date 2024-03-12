import React from "react";
import Card from "./Card";
import { useState,useEffect } from "react";

export default function ProductList() {
        const [products, setProducts] = useState([]);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch("https://dummyjson.com/products");
              const data = await response.json();
              setProducts(data.products);
            } catch (error) {
              console.log( error);
            }
          };
      
          fetchData();
        }, []);
      
        return (
          <div className="product-list flex flex-wrap justify-between m-3">
            {products.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        );
      };
      
      
      
 
