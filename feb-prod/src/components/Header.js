import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        // width: "15%",
        backgroundColor: "#f4f4f4",
        width: "100%",
        textAlign: "left",
        paddingLeft: "1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className='logo' style={{ fontSize: "2rem", marginLeft: "2rem" }}>
        {" "}
        Product
      </div>
      <div className='menu-item'>
        <div style={styleMenuItem}>
          <Link to='/' style={styleListItems}>
            Home
          </Link>
          <Link to='/product-entry' style={styleListItems}>
            Product Entry
          </Link>
          <Link to='/product-list' style={styleListItems}>
            Product List
          </Link>
        </div>
      </div>
    </div>
  );
}

const styleMenuItem = {
  display: "flex",
  justifyContnet: "center",
  gap: "0.5rem",
  listStyle: "none",
  marginRight: "2rem",
};

const styleListItems = {
  cursor: "pointer",
};

export default Header;
