import "./App.css";
import Header from "./components/Layout/Header";
import ItemList from "./components/ItemList/ItemList";
import UserDetails from "./components/UserDetails/UserDetails";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyContextProvider from "../src/store/query";

const App: React.FC = () => {
  return (
    <MyContextProvider>
      <Router>
        <>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<ItemList />} />
              <Route path="/user/:login" element={<UserDetails />} />
            </Routes>
          </div>
        </>
      </Router>
    </MyContextProvider>
  );
};

export default App;
