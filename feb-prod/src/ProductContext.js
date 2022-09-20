import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const ProductContext = createContext();

export function ProductProvider(props) {
  const navigate = useNavigate();
  const [newproducts, setNewProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
  });

  const fetchProductData = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/products/allproducts"
    );
    setNewProducts(response.data);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  // This function will add products into the newproducts array
  const addProduct = (name, price) => {
    // add the logic to insert the product information
    setNewProducts([...newproducts, { name, price }]);
  };

  const { name, price } = newProduct;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name !== "" && price !== "") {
      addProduct(name, price);
      await axios.post(
        "http://localhost:5000/api/products/addproduct",
        newProduct
      );
      setNewProduct({
        name: "",
        price: "",
      });
      navigate("/product-list");
    } else {
      alert("Please enter both inputs");
    }
  };

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleDelete = (id) => {
    setNewProducts(newproducts.filter((prod) => prod.id !== id));
  };

  const handleFilter = (filterCriteria) => {
    // TODO: Add another filter method for sorting stationary and clothing catagories
    switch (filterCriteria) {
      case "price":
        setNewProducts(newproducts.filter((product) => product.price >= 20));
        break;
      case "stationary":
        setNewProducts(
          newproducts.filter((product) => product.catagory === "Stationary")
        );
        break;
      case "clothing":
        setNewProducts(
          newproducts.filter((product) => product.catagory === "Clothing/shoes")
        );
        break;
      default:
        setNewProducts(newproducts);
    }

    // filterCriteria === "price" &&
    //   setNewProducts(newproducts.filter((product) => product.price >= 20));

    // filterCriteria === "stationary" &&
    //   setNewProducts(
    //     newproducts.filter((product) => product.catagory === "Stationary")
    //   );

    //   console.log('do something!');

    // filterCriteria === "clothing" &&
    //   setNewProducts(
    //     newproducts.filter((product) => product.catagory === "Clothing/shoes")
    //   );
  };

  const buttonValue = "X";

  return (
    <ProductContext.Provider
      value={{
        newproducts,
        newProduct,
        handleChange,
        handleSubmit,
        buttonValue,
        handleDelete,
        handleFilter,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
