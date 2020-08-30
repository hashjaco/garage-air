import React from "react";
import "./index.css";

const Cell = ({ content }) => {
  const { name, image_url, location, rating, review_count } = content;
  const score = (review_count * rating) / (review_count + 1);

  return <div className="grid-item"></div>;
};

export default Cell;
