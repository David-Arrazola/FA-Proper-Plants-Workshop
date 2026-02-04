const cart = [];

export default function Cart() {
  return (
    <ul>
      <h2>Cart</h2>
      {cart.map((currItem) => (
        <li key={currItem.name}>{currItem.name}</li>
      ))}
    </ul>
  );
}
