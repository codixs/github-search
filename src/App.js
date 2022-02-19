import "./App.css";
import Header from "./components/Layout/Header";
import ItemList from "./components/ItemList/ItemList";
import React, { useState } from "react";

function App(props) {
  const [query, setQuery] = useState("michal");
  const queryHandler = (query) => {
    // store query
    console.log(`query: ${query}`);
    setQuery(query);
  };

  return (
    <div className="App">
      <Header onQuery={queryHandler} />
      <ItemList query={query} />
    </div>
  );
}

export default App;
