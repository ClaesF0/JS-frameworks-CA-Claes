import { Route, Routes } from "react-router-dom";
import Products from "../components/views/Products";
import SingleProduct from "../components/views/SingleProduct";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default Router;
