import { Route, Routes } from "react-router-dom";
import Products from "../components/views/Products";
//import SingleProduct from "claes-js-app/src/components/views/SingleProduct.js";
import SingleProduct from "../components/views/SingleProduct";
import CartCheckoutPage from "../components/views/CartCheckoutPage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<CartCheckoutPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default Router;
