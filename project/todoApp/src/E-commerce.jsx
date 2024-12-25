import React, { useState } from "react";

function ProductList() {
  const products = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
  ];

  const [cart, setCart] = useState([]);

  const toggleCart = (product) => {
    if (cart.includes(product)) {
      setCart(cart.filter((item) => item !== product));
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name} - {product.price}</span>
            <button onClick={() => toggleCart(product)}>
              {cart.includes(product) ? "Remove from Cart" : "Add to Cart"}
            </button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
