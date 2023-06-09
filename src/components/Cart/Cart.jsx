import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "./cartAction";

const Cart = () => {
  const state = useSelector((state) => state);
  console.log(state.cart)
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <h2>Number of items in Cart: {state.cart.numOfItems}</h2>
      <button
        onClick={() => {
          dispatch(addItem());
        }}
      >
        Add Item to Cart
      </button>
      <button
        disabled={state.cart.numOfItems > 0 ? false : true}
        onClick={() => {
          dispatch(deleteItem());
        }}
      >
        Remove Item to Cart
      </button>
    </div>
  );
};

export default Cart;