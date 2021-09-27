import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart, name } = props;
  let total = 0;
  for (const item of cart) {
    total += item.salary;
  }
  return (
    <div className="cart-info">
      <h2>Cart</h2>
      <br />
      <h3>Total Added Actors: {props.cart.length}</h3>
      <h3>Total Money: {total}</h3>
      <button className="btn">Confirm</button>
    </div>
  );
};

export default Cart;
