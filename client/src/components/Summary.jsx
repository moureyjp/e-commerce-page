const Summary = ({ quantity, totalPrice }) => {
  return (
    <div>
      <h2>SUMMARY</h2>
      <p>Quantity: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default Summary;
