import React from "react";
import "./Card.css";

export const Card = props => {
  // console.log(props, "dfdsf");
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.id}?set=set2`} />
      <h1 key={props.id}>{props.name}</h1>
      <p>{props.email}</p>
    </div>
  );
};
