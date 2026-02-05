import Plants from "./plants";
import Cart from "./Cart";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <section>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <Plants cart={cart} setCart={setCart}></Plants>
        <Cart cart={cart} setCart={setCart}></Cart>
      </main>
    </section>
  );
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
