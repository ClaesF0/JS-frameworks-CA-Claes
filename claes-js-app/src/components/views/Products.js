import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/modules/productsReducer";
import ProductList from "../ProductList";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.allProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Products;
