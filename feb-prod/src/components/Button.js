import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";

export default function Button({ product }) {
  const { buttonValue, handleDelete } = useContext(ProductContext);
  return (
    <button onClick={() => handleDelete(product.id)} style={{ color: "red" }}>
      {buttonValue}
    </button>
  );
}
