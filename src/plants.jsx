import PLANTS from "./data";
// import "./index.css";

/** A navbar that allows users to choose between a list of shows */
export default function Plants() {
  const showHandler = (currPlant) => {
    return (
      <li key={currPlant.name}>
        <span>{currPlant.image}</span>
        <h3>{currPlant.name}</h3>
        <button>Add to cart</button>
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
