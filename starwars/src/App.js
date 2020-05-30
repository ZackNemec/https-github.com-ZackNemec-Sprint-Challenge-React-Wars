import React from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = React.useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  React.useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/swapi.py4e.com/api/people")
      .then((pull) => {
        console.log(pull.data);
        setData(pull.data.results);
      });
  });
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character peopleArray={data} />
    </div>
  );
};

export default App;
