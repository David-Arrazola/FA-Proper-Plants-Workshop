export default function Cart({ cart }) {
  return (
    <ul>
      <h2>Cart</h2>
      {cart.map((currItem) => (
        <li key={currItem.name}>
          <section>
            <span>{currItem.image}</span>
            <h3>{currItem.name}</h3>
          </section>
          <section>
            <button>-</button>
            {currItem.count}
            <button>+</button>
          </section>
        </li>
      ))}
    </ul>
  );
}
