import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeLastProductFromCart,
  removeFromCart,
} from "../../store/modules/cartSlice";
import { Link } from "react-router-dom";
import getQuantity from "../../utils/getQuantity";

const CartCheckoutPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  console.log("cart", cart);

  function handleCheckout() {
    window.location.href = "/success";
  }

  return (
    <main className="min-h-[calc(100vh_-_80px)]">
      <div>
        <h1>Cart</h1>
        <ul>
          {cart &&
            cart.length > 0 &&
            getQuantity(cart).map((product) => (
              <li
                key={product.id}
                className="border border-gray-200 flex justify-between items-center p-2"
              >
                <h3>{product.title}</h3>
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-[120px]"
                />
                <span>
                  Quantity: {product.quantity}{" "}
                  <button
                    className="p-2 border border-blue-500 "
                    onClick={() => dispatch(addToCart(product))}
                  >
                    PLUSS
                  </button>{" "}
                  <button
                    className="p-2 border border-blue-500 "
                    onClick={() =>
                      dispatch(removeLastProductFromCart(product.id))
                    }
                  >
                    MINUS
                  </button>
                </span>
                <span>
                  <p className="text-lg font-medium">
                    $
                    {product.discountedPrice &&
                      Number(product.discountedPrice).toFixed(2)}
                  </p>
                  {product.discountedPrice < product.price && (
                    <p className="ml-2 text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </p>
                  )}
                </span>
                <button
                  className="p-2 border border-red-500 "
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove from cart
                </button>
              </li>
            ))}
          {cart && cart.length === 0 && <p>Cart is empty, buy something</p>}
        </ul>
        Total: ${" "}
        {cart &&
          cart
            .reduce(
              (acc, product) =>
                acc + (product.discountedPrice || product.price),
              0
            )
            .toFixed(2)}
      </div>
      <button
        onClick={handleCheckout}
        type="submit"
        className="p-2 text-white bg-green-500 "
      >
        Checkout
      </button>
      <div>
        <Link to="/" className="text-blue-400 text-xl">
          Browse further
        </Link>
      </div>
      <div>
        <Link to="/contact" className="text-blue-400 text-xl">
          Contact us
        </Link>
      </div>
    </main>
  );
};

export default CartCheckoutPage;
