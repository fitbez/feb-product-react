import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../ProductContext";
import Header from "./Header";

const Title = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const ProductName = styled.input`
  padding: 0.7rem;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 0.8rem;
  width: 100%;
`;

const ProductPrice = styled.input`
  padding: 0.7rem;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 0.8rem;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 20%;
  padding: 0.5rem 0;
  background-color: transparent;
  font-size: 1rem;
  border: 1px solid #000;
  border-radius: 5px;
  &:hover {
    background-color: #03a9f4;
    color: #fff;
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

const Label = styled.label`
  color: #333;
`;

const Form = function () {
  const { handleChange, handleSubmit, newProduct } = useContext(ProductContext);

  const { name, price } = newProduct;
  return (
    <>
      <Header />
      <Title>Please use the form to insert a prodcut</Title>
      <StyledForm>
        <div style={styledProduct}>
          <Label forhtml='name'>Product name: </Label>
          <ProductName
            type='text'
            name='name'
            value={name}
            id='name'
            placeholder='product name'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <Label forhtml='price'>Product price: </Label>
          <ProductPrice
            type='text'
            name='price'
            value={price}
            id='price'
            placeholder='price'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
      </StyledForm>
    </>
  );
};

const styledProduct = {
  display: "flex",
  gap: "8px",
};

export default Form;
