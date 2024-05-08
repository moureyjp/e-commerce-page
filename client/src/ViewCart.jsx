ViewCart.jsx

const ViewCart = ({ useCart, isHidden }) => {
  const { cartItem, setCartItem } = useCart;

  const checkout = () => {
    setCartItem(() => []);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItem];
    setCartItem(() => newCartItems.splice(index, 1));
  };

  return (
    <div hidden={isHidden}>
      {cartItem.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button>remove</button>
        </div>
      ))}
      <button onClick={() => removeFromCart(index)}>Checkout</button>
    </div>
  );
};

export default ViewCart;