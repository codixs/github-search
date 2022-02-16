import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import ItemList from "./components/ItemList/ItemList";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemList />
    </div>
  );
}

export default App;
