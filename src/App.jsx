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
        <Plants currCart={cart} setCart={setCart}></Plants>
        <Cart cart={cart}></Cart>
      </main>
    </section>
  );
}
