import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import { fetchProducts } from "./store/modules/productsReducer";
import ProductList from "./components/ProductList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Products from "./components/views/Products";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log("products", products);

  return (
    <div className="App">
      <Navbar />
      <Products />
      Hello from App.js
    </div>
  );
}

export default App;
