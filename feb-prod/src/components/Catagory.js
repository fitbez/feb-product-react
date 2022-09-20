import React, { useContext } from "react";
import ProductContext from "../ProductContext";

const greaterThan = " >= 20";

function Catagory() {
  const { handleFilter } = useContext(ProductContext);
  return (
    <>
      <h2>Sort a product from the list</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button onClick={() => handleFilter("price")}> {greaterThan}</button>
        <button onClick={() => handleFilter("stationary")}>Stationary</button>
        <button onClick={() => handleFilter("clothing")}>
          Clothing and Shoes
        </button>
      </div>
    </>
  );
}

export default Catagory;
