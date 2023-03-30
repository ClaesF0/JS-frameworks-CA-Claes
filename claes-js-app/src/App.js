import "./App.css";
import "./index.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import productsReducer from "./store/modules/productsReducer";
import { fetchProducts } from "./store/modules/productsReducer";
import Router from "./routes/Router";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <Navbar />
      hallo
      <ProductList />
    </div>
  );
}

export default App;
