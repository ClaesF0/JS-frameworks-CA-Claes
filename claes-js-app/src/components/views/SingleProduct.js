import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchOneProduct } from "../../store/modules/productsReducer";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/modules/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productsReducer);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
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
      <div class="container mx-auto flex flex-col md:flex-row px-2 border-2 border-green-400">
        <div class="w-full md:w-3/4  md:mb-0">
          <img
            class="max-h-screen object-fit object-center rounded"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>

        <div class="w-full md:w-1/3 border-2 border-blue-400 block ">
          <h1 class="text-2xl font-bold mb-2 mx-auto">{product.title}</h1>

          <div class="text-sm font-semibold border-2 border-cyan-400  pl-0 text-start">
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
            <p className="text-xs">
              ({product.reviews && product.reviews.length} reviews)
            </p>
          </div>

          <p class="text-sm mb-4">{product.description}</p>
          <p className="text-lg font-medium">
            Price:{" "}
            {product.discountedPrice && product.discountedPrice.toFixed(2)}
          </p>
          {product.discountedPrice &&
            product.discountedPrice < product.price && (
              <p className="ml-2 text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </p>
            )}

          <div className="flex flex-wrap">
            {product.tags &&
              product.tags.map((tag) => (
                <p
                  key={tag}
                  className="bg-gray-200 rounded-md py-1 px-2 text-xs mr-2 mb-2"
                >
                  {tag}
                </p>
              ))}
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
          <div>
            {product.reviews &&
              product.reviews.map((review) => (
                <>
                  <h2>Reviews:</h2>
                  <div
                    key={review.id}
                    className="mb-4 border-2 border-gray-400"
                  >
                    <h3 className="font-semibold">
                      Review by {review.username}
                    </h3>
                    <p className="text-sm italic ">"{review.description}"</p>
                    <div className="flex mb-2">
                      <label className="rating-label mx-auto">
                        <span className="text-sm font-semibold">
                          {review.username} rated {product.title} a{" "}
                          {review.rating}/5
                        </span>
                        <input
                          aria-label={`Rating ${review.rating} out of 5`}
                          className="rating mx-auto"
                          max="5"
                          readOnly
                          step="0.01"
                          style={{
                            "--fill": "#0097a7",
                            "--value": review.rating,
                          }}
                          type="range"
                        />
                      </label>
                    </div>
                  </div>
                </>
              ))}
          </div>
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

export default SingleProduct;
