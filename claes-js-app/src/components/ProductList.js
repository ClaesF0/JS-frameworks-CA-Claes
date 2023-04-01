import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div>
      <p className="text-xl">All products</p>
      {products.map((product) => (
        <div key={product.id} className="border border-gray-500">
          <Link to={`/products/${product.id}`}>
            <img src={product.imageUrl} alt={product.title} />
          </Link>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.discountedPrice}</p>

          <label class="rating-label ">
            <p className="text-xs ">Rated {product.rating}/5</p>
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
          <p className="text-red-500">
            {product.tags.map((tag) => (
              <p>{tag}</p>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

/*
{
        "id": "f99cafd2-bd40-4694-8b33-a6052f36b435",
        "title": "USB charger cable",
        "description": "USB 2.0 to USB Type-C. This can be used to power all compliant mobile devices.",
        "price": 45.99,
        "discountedPrice": 45.99,
        "imageUrl": "https://api.noroff.dev/images/online-shop/0-usb-plug.jpg",
        "rating": 4.5,
        "tags": [
            "electronics"
        ],
        "reviews": [
            {
                "id": "c6e4fb1a-4c3d-4a4b-b785-a269f7f0707d",
                "username": "Ola N.",
                "rating": 4,
                "description": "Did what it needed to do but wish it lasted longer"
            },
            {
                "id": "dbe6d28f-35f7-43a7-88f4-93a68f3c131c",
                "username": "Kate M.",
                "rating": 5,
                "description": "Perfect!"
            }
        ]
    },
*/
