import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/modules/cartSlice";

const CartCheckoutPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  console.log("cart", cart);

  function handleCheckout() {
    window.location.href = "/success";
  }

  return (
    <>
      <div>
        <h1>Cart</h1>
        <ul>
          {cart &&
            cart.length > 0 &&
            cart.map((product) => (
              <li key={product.id}>
                <h3>{product.title}</h3>
                <p className="text-lg font-medium">
                  ${product.discountedPrice.toFixed(2)}
                </p>
                {product.discountedPrice < product.price && (
                  <p className="ml-2 text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </p>
                )}
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
    </>
  );
};

export default CartCheckoutPage;
