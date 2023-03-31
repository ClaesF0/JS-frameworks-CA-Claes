import "./App.css";
import "./index.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import { fetchProducts } from "./store/modules/productsReducer";
import ProductList from "./components/ProductList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Products from "./components/views/Products";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      hallo
    </div>
  );
}

export default App;
