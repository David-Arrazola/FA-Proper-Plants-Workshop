import PLANTS from "./data";

/** A navbar that allows users to choose between a list of shows */
export default function Plants() {
  const showHandler = (currPlant) => {
    return <li key={currPlant.name}>{currPlant.name}</li>;
  };

  return <ul>{PLANTS.map(showHandler)}</ul>;
}
