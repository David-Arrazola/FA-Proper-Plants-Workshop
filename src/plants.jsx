import PLANTS from "./data";
// import "./index.css";

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

export function addOrSubCount(plantArr, plantToModify, action) {
  let clonedPlantArr = [...plantArr];

  for (let i = 0; i < plantArr.length; i++) {
    // Checking if name of current iterated object is the same as "plantToModify"
    if (plantArr[i].name === plantToModify.name && action === "Add") {
      // if user chooses to "Add" quantity of plant, "count" will be raised by 1
      plantArr[i].count++;
      // This will activate if user chooses to "Sub" quantity of "PlantToModify"
    } else if (plantArr[i].name === plantToModify.name && action === "Sub") {
      /* Ternary checks "plantToModify"'s count number, if greater than 0, count if lowered.
        If count is zero then "plantToAdd" will be removed from cloned array*/
      plantArr[i].count > 1
        ? plantArr[i].count--
        : (clonedPlantArr = clonedPlantArr.filter(
            (currPlant) => currPlant.name != plantArr[i].name,
          ));
    }
  }
  return clonedPlantArr;
}
