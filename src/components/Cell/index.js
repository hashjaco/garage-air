import React from "react";
import "./index.css";

const Cell = ({ content }) => {
  const { name, image_url, location, rating, review_count, url } = content;
  const score = (review_count * rating) / (review_count + 1);
  const address = location["display_address"];

  return (
    <div className="grid-cell">
      <div>
        <img src={image_url} alt="" />
        <div className="cell-body">
          <h2>{name}</h2>
          <div className="address">
            <p>{address[0]}</p>
            <p>{address[1]}</p>
          </div>
          <p>{`Rating: ${rating}`}</p>
          <p>{`Reviews: ${review_count}`}</p>
          <p>{`Overall Score: ${score}`}</p>
          <button>
            <a href={url}>Learn More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cell;
