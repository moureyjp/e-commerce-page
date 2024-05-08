const AddToCart = ({
  setQuantity,
  setTotalPrice,
  id,
  name,
  price,
  setCartItem,
}) => {
  const addToCart = () => {
    setQuantity((prev) => prev + 1);
    setTotalPrice((prev) => prev + price);
    setCartItem((prev) => [...prev, { id, name, price }]);
  };

  return <button onClick={addToCart}>ADD</button>;
};

export default AddToCart;
