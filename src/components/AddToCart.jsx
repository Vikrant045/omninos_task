import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
function AddToCart() {
  let { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null); // State to hold the product details
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch product details based on productId
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await response.json();
        setProduct(data); // Set the product details in state
        setTotalPrice(data.price * quantity); // Set the initial total price
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId, quantity]); // Fetch product details whenever productId or quantity changes

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price);
    }
  };

  if (!product) {
    return <div>Loading...</div>; // Render loading state while fetching product details
  }

  return (
    <div className="p-4 border rounded-md shadow-md ml-32 mt-8 mr-32">
      <h2 className="text-4xl font-bold mb-4">Shopping Cart</h2>
      <div className="flex items-center ">
        <img src={product.thumbnail} alt="Product" className="w-29 h-35 rounded-md mr-4 ml-13" />
        <div className='ml-16'>
          <h3 className="text-2xl font-semibold">{product.title}</h3>
          <p className="text-gray-600">Price Per Item: ${product.price}</p>
          <div className="flex items-center mt-2">
            <button onClick={handleDecrement} className="bg-gray-200 px-3 py-1 rounded-md mr-2 ">-</button>
            <span className='text-base'>{quantity}</span>
            <button onClick={handleIncrement} className="bg-gray-200 px-3 py-1 rounded-md ml-2">+</button>
          </div>
          <p className="mt-2">Total Price: ${totalPrice}</p>
        </div>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">Checkout</button>
    </div>
  );
}

export default AddToCart;
