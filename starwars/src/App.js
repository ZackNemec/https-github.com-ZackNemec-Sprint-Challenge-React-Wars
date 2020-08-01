import React from "react";
import "./App.css";
import axios from "axios";
import Characters from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const searchChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  React.useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((pull) => {
      //console.log(pull.data);
      const array1 = pull.data.results;
      const arrayFilter = array1.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
      });
      setData(arrayFilter);
    });
  }, [search]);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <label>
        Search:
        <input
          type="text"
          name="search"
          valve={search}
          onChange={searchChange}
        />
      </label>
      <Characters characterArray={data} />
    </div>
  );
};

export default App;
