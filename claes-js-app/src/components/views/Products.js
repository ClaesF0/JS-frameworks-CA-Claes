import React from "react";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/modules/productsReducer";
import ProductList from "../ProductList";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const memoProducts = useMemo(() => products, [products]);

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={memoProducts} />
    </div>
  );
};

export default Products;
