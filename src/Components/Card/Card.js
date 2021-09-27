import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const element = <FontAwesomeIcon icon={faCheck} />;

const Card = (props) => {
  const { name, age, Role, Country, salary, img } = props.person;
  return (
    <div className="card">
      <img src={img} alt="" className="image"></img>
      <h3>Name : {name}</h3>
      <p> Age: {age}</p>
      <p>Role: {Role}</p>
      <p>Country: {Country}</p>
      <p>Salary: {salary}</p>
      <button onClick={() => props.handleCart(props.person)} className="btn">
        {element}Hire
      </button>
    </div>
  );
};

export default Card;
