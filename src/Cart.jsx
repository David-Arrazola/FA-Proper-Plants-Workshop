import { addOrSubCount } from "./plants";

export default function Cart({ cart, setCart }) {
  return (
    <ul className="cart">
      <h2>Cart</h2>
      {cart.map((currItem) => (
        <li key={currItem.name}>
          <section className="cartPlantNameAndImage">
            <span>{currItem.image}</span>
            <h3>{currItem.name}</h3>
          </section>
          <section className="cartPlantCount">
            <button
              onClick={() => setCart(addOrSubCount(cart, currItem, "Sub"))}
            >
              -
            </button>
            <p>{currItem.count}</p>
            <button
              onClick={() => setCart(addOrSubCount(cart, currItem, "Add"))}
            >
              +
            </button>
          </section>
        </li>
      ))}
    </ul>
  );
}
