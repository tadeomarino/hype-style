import React from "react";
import { NavLink } from "react-router-dom";

const AddToCart = ({handleAdd}) => {
  
    return (
    <div>
      {/* <NavLink to={`/cart`}> */}
        <button className="add-to-cart-button" onClick={handleAdd}>
          Add to cart
        </button>
      {/* </NavLink> */}
    </div>
  );
};

export default AddToCart;
