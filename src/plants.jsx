import PLANTS from "./data";
import { addOrSubCount } from "./App";

/** A navbar that allows users to choose between a list of shows */
export default function Plants({ cart, setCart }) {
  const convertToLi = (currPlant) => {
    return (
      <li key={currPlant.name}>
        <span>{currPlant.image}</span>
        <h3>{currPlant.name}</h3>
        {/* onClick() will copy existing array into new one and add a new object into array.
        New object is current plant with its info and starting count of 1 */}
        <button onClick={() => buttonHandler(cart, setCart, currPlant)}>
          Add to cart
        </button>
      </li>
    );
  };

  return (
    <section>
      <h2>Plants</h2>
      <ul className="plants">{PLANTS.map(convertToLi)}</ul>
    </section>
  );
}

function buttonHandler(cart, setCart, currPlant) {
  //* If "currCart" doesn't contain "currPlant" object, then current cart state will
  //* be updated with new array with old data and new plant object

  cart.some((cartItem) => cartItem.name === currPlant.name)
    ? setCart(addOrSubCount(cart, currPlant, "Add")) //* setting "cart" to the return of "addQuantity"
    : setCart([
        ...cart,
        {
          name: currPlant.name,
          image: currPlant.image,
          count: 1,
        },
      ]);
}
