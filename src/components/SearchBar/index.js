import React, { useState } from "react";
import "./index.css";

const SearchBar = ({ sendBackInput }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const target = e.target;
    setValue(target.value);
  };

  const handleSubmit = () => {
    console.log(value);
    sendBackInput(value);
    setValue("");
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        className="search"
        value={value}
        onChange={handleChange}
      />
      <div className="submitBtn" onClick={handleSubmit}>
        Search
      </div>
    </div>
  );
};

export default SearchBar;
