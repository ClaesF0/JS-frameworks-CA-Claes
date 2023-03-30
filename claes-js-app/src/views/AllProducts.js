import React from "react";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/modules/productsReducer";
import ProductList from "../components/ProductList";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const memoProducts = useMemo(() => allProducts, [allProducts]);
  return (
    <>
      <p className="text-red-600">PRODUCTS</p>
      {<ProductList products={memoProducts} />}
    </>
  );
};

export default AllProducts;
