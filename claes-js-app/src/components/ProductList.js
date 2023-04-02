import React from "react";
import { Link } from "react-router-dom";
const ProductList = ({ products }) => {
  return (
    <>
      <p className="text-xl">All products</p>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-500 rounded-md p-4"
          >
            <Link to={`/products/${product.id}`}>
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />

              <h2 className="text-lg font-medium mb-2">{product.title}</h2>
              <p className="text-gray-500 mb-2">{product.description}</p>
              <div className="flex items-center mb-2">
                <p className="text-lg font-medium">
                  ${product.discountedPrice.toFixed(2)}
                </p>
                {product.discountedPrice < product.price && (
                  <p className="ml-2 text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </p>
                )}
              </div>
              <div className="flex items-center mb-2">
                <label className="rating-label mr-2">
                  <span className="text-xs text-gray-500">
                    Rated {product.rating}/5
                  </span>
                  <input
                    aria-label={`Rating ${product.rating} out of 5`}
                    className="rating w-20 h-4 mx-2"
                    max="5"
                    readOnly
                    step="0.01"
                    style={{ "--fill": "#0097a7", "--value": product.rating }}
                    type="range"
                  />
                </label>
                <p className="text-gray-500 text-xs">
                  {product.reviews.length} reviews
                </p>
              </div>
            </Link>
            <div className="flex flex-wrap">
              {product.tags.map((tag) => (
                <p
                  key={tag}
                  className="bg-gray-200 rounded-md py-1 px-2 text-xs mr-2 mb-2"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
