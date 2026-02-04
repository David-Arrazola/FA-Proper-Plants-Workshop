import PLANTS from "./data";
// import "./index.css";

/** A navbar that allows users to choose between a list of shows */
export default function Plants({ currCart, setCart }) {
  const showHandler = (currPlant) => {
    return (
      <li key={currPlant.name}>
        <span>{currPlant.image}</span>
        <h3>{currPlant.name}</h3>
        {/* onClick() will copy existing arrat into new one and add a new object into array.
        New object is current plant with its info and starting count of 1 */}
        <button
          onClick={() =>
            currCart.some((cartItem) => cartItem.name === currPlant.name)
              ? 1 + 1
              : setCart([
                  ...currCart,
                  {
                    name: currPlant.name,
                    image: currPlant.image,
                    count: 1,
                  },
                ])
          }
        >
          Add to cart
        </button>
      </li>
    );
  };

  return (
    <section>
      <h2>Plants</h2>
      <ul className="plants">{PLANTS.map(showHandler)}</ul>
    </section>
  );
}
