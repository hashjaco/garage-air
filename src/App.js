import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import GarageList from "./components/GarageList";

const App = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  /* Retrieve input from user submission */
  const getUserInput = (input) => {
    fetchItems(input)
      .then(() =>
        console.log(`Sweet! You have just run a search on garages in ${input}`)
      )
      .catch((err) => console.error(err.message));
    setQuery(input);
  };

  /**
   * @function getItems
   * @returns information about parking garages located in specified location
   * */
  const fetchItems = async (location) => {
    setLoading(true);
    await fetch(`http://localhost:8081/garages/${location}`)
      .then((data) => data.json())
      .then((result) => {
        setItems(result["businesses"]);
      })
      .catch((err) => console.error(err.message));
    setLoading(false);
  };

  return (
    <div className="App">
      {/*title*/}
      <div className="title">
        <h1>Garage Search</h1>
      </div>
      {/*search bar*/}
      <SearchBar sendBackInput={getUserInput} />
      {/*garage list*/}
      <GarageList items={items} isLoading={loading} />
      {/*paginator*/}
    </div>
  );
};

export default App;
