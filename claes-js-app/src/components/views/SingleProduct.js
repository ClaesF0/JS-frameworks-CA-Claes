import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchOneProduct } from "../../store/modules/productsReducer";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productsReducer);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    console.log("product fra singleproduct", product);
    console.log("id fra single product", id);

    dispatch(fetchOneProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    fetch("https://api.noroff.dev/api/v1/online-shop")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter(
          (item) =>
            item.id !== id &&
            item.tags.some((tag) => product.tags.includes(tag))
        );
        setSimilarProducts(filteredProducts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [product]);

  return (
    <div>
      <div class="container mx-auto flex flex-col md:flex-row px-2">
        <div class="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0">
          <img class="w-full" src={product.imageUrl} alt={product.name} />
        </div>

        <div class="w-full md:w-1/2">
          <h1 class="text-2xl font-bold mb-2">{product.name}</h1>
          <div class="flex mb-2">
            <span class="text-sm font-semibold">
              Rated {product.rating}/5
              <label class="rating-label ">
                <input
                  aria-label={`Rating ${product.rating} out of 5`}
                  class="rating"
                  max="5"
                  readonly
                  step="0.01"
                  style={{ "--fill": "#0097a7", "--value": product.rating }}
                  type="range"
                />
              </label>
            </span>
          </div>
          <div class="flex mb-2">
            <span class="mr-2 text-sm">Price:</span>
            <span class="text-sm font-semibold">{product.price}</span>
          </div>
          <p class="text-sm mb-4">{product.description}</p>
          <p className="text-gray-500">
            Tags:
            {product.tags && product.tags.map((tag) => <p>{tag}</p>)}
          </p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
      {similarProducts.length > 0 && (
        <div>
          <h2>Similar products:</h2>
          <div className="flex flex-wrap ">
            {similarProducts.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-lg p-4 mb-4 mr-4 sm:w-[300px] mx-auto"
              >
                <Link to={`/products/${item.id}`}>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <img
                    className="w-[120px] h-[120px] object-contain my-2 mx-auto"
                    src={item.imageUrl}
                    alt="{item.title}"
                  />
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-900 font-medium mt-2">
                    Price: {item.price}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
console.log("SingleProduct.js");
export default SingleProduct;
