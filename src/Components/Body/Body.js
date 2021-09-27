import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import "./Body.css";

const Body = () => {
  // Actor/Actress Card
  const [card, setCard] = useState([]);
  // Cart Info
  const [cart, setCart] = useState([]);
  // Load Data
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  //  Update Cart
  const handleCart = (people) => {
    const newCart = [...cart, people];
    setCart(newCart);
  };

  return (
    <div className="body">
      {/* Card Info  */}
      <div className="card-info">
        {card.map((person) => (
          <Card
            key={person.name}
            person={person}
            handleCart={handleCart}
          ></Card>
        ))}
      </div>
      {/* Cart info  */}
      <div className="cart">
        <Cart key={cart.name} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Body;
