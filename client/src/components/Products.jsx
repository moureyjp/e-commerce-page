import { useState } from "react";
import { productData } from "../data";
import { Link } from "react-router-dom";

import ProductInformation from "./ProductInformation";
import Summary from "./Summary";
import ViewCart from "./ViewCart";

const Product = () => {
  const [products, setProducts] = useState(productData);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [isHidden, setIsHidden] = useState(true);

  const toggleCart = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <>
      <h1>E-COMMERCE PRODUCT PAGE</h1>
      {/* <Summary quantity={quantity} totalPrice={totalPrice} /> */}
      <ViewCart useCart={{ cartItem, setCartItem }} isHidden={isHidden} />
      <button onClick={toggleCart}>My Cart</button>
      {products.map((product) => (
        <ProductInformation
          key={product.id}
          product={product}
          setQuantity={setQuantity}
          setTotalPrice={setTotalPrice}
          setCartItem={setCartItem}
        />
      ))}
    </>
  );
};

export default Product;
