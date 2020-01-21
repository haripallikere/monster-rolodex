import React from "react";
import "./Card-list.css";
import { Card } from "../card/Card";

export const CardList = props => {
  //   console.log(props.monsters[0], "sd");
  return (
    <div className="card-list">
      {props.monsters.map(v => (
        <Card id={v.id} name={v.name} />
      ))}
    </div>
  );
};
