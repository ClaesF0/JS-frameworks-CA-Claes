import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import { fetchProducts } from "./store/modules/productsReducer";
import ProductList from "./components/ProductList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Products from "./components/views/Products";
import Router from "./routes/Router";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />

      <Router />
    </div>
  );
}

export default App;
