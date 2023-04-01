import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchOneProduct } from "../../store/modules/productsReducer";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productsReducer);
  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log("product", product);
    console.log("id", id);
    dispatch(fetchOneProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      {" "}
      <h1>Single Product</h1> <h2>{product.name}</h2>{" "}
      <p>{product.description}</p> <p>{product.price}</p>{" "}
    </div>
  );
};

export default SingleProduct;
