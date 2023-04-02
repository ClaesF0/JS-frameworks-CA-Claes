import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/modules/cartSlice";

const CartCheckoutPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  console.log("cart", cart);
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart &&
          cart.length > 0 &&
          cart.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
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
    </div>
  );
};

export default CartCheckoutPage;

/* 
        {cart &&
          cart.lenght > 0 &&
          cart.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button onClick={() => dispatch(removeFromCart(product.id))}>
                Remove from cart
              </button>
            </li>
          ))}
        
*/
