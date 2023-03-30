import { Route, Routes } from "react-router-dom";
import AllProducts from "../views/AllProducts";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllProducts />} />
      </Routes>
    </>
  );
}

export default Router;
