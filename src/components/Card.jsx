import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="w-[300px] rounded-md mt-4 border-4 m-8">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{product.title}</h1>
        <p className="card-text">{product.description}</p>
        <h1 className="text-lg font-semibold">Rs.{product.price}</h1>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-2 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 
          text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <Link to={`/addtocart/${product.id}`}>
            Add To Cart
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
