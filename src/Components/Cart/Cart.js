import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const item of cart) {
    total += item.salary;
  }
  return (
    <div className="cart-info">
      <h2>Cart</h2>
      <br />
      <h3>Total Added Actors: {props.cart.length}</h3>
      <h3>Total Money: ${total}</h3>
      <br />
      <h4>Hired List: </h4>
      {cart.map((item) => (
        <li className="list">{item.name}</li>
      ))}
      <button className="btn">Confirm</button>
    </div>
  );
};

export default Cart;
