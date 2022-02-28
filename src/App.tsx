import "./App.css";
import Header from "./components/Layout/Header";
import ItemList from "./components/ItemList/ItemList";
import UserDetails from "./components/UserDetails/UserDetails";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("ELPASSION");
  const queryHandler = (query: string) => {
    // store query
    console.log(`query: ${query}`);
    setQuery(query);
  };

  return (
    <Router>
      <>
        <div className="App">
          <Header onQuery={queryHandler} />
          {/* <Routes>
            <Route path="/" element={<ItemList query={query} />} />
            <Route path="/user/:login" element={<UserDetails />} />
          </Routes> */}
        </div>
      </>
    </Router>
  );
};

export default App;
