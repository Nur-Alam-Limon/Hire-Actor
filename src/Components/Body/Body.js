import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import "./Body.css";

const Body = () => {
  const [card, setCard] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  const handleCart = (people) => {
    const newCart = [...cart, people];
    setCart(newCart);
  };

  return (
    <div className="body">
      <div className="card-info">
        {card.map((person) => (
          <Card
            key={person.name}
            person={person}
            handleCart={handleCart}
          ></Card>
        ))}
      </div>
      <div className="cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Body;
