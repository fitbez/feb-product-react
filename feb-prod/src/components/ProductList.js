import React, { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../ProductContext";
import Button from "./Button";
import Header from "./Header";
import Catagory from "./Catagory";

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  font-size: 1.25rem;
`;
function ProductList() {
  const { newproducts } = useContext(ProductContext);
  console.log("new product", newproducts);
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div>
          <Catagory />
        </div>

        <div>
          <div>Product list goes here</div>
          {newproducts.map((product) => {
            return (
              <Ul key={product._id}>
                <Button product={product} />
                <Li>
                  <b>Product name:</b> {product.name}
                </Li>
                <Li>
                  <b>Price:</b> {product.price}
                </Li>
              </Ul>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
