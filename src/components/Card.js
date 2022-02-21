import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card" key={props.id}>
      <img src={props.image} alt="movie poster" />
      <h3>{props.title}</h3>
    </div>
  );
};

export default Card;
