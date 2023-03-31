import { Route, Routes } from "react-router-dom";
import Products from "../components/views/Products";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </>
  );
}

export default Router;
