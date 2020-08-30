import React from "react";
import Cell from "../Cell";
import "./index.css";

const GarageList = ({ items, isLoading }) => {
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="garage-list">
      {items.map((item, index) => {
        return <Cell key={index} content={item} />;
      })}
    </div>
  );
};

export default GarageList;
