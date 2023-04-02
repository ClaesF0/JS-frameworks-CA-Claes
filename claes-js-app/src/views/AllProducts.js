import React from "react";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/modules/productsReducer";
import ProductList from "../components/ProductList";

const products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const memoProducts = useMemo(() => products, [products]);
  return (
    <>
      <p className="text-red-600">PRODUCTS</p>
      {<ProductList products={memoProducts} />}
    </>
  );
};

export default products;
