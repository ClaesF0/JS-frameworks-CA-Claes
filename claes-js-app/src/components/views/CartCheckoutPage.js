import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/modules/cartSlice";

const CartCheckoutPage = () => {
  const dispatch = useDispatch();
  const { stuffInCart } = useSelector((state) => state.cart);
  console.log("stuffInCart", stuffInCart);
  return (
    <div>
      <h1>hallo jeg er CartCheckoutPage</h1>
      <ul>
        {stuffInCart &&
          stuffInCart.lenght > 0 &&
          stuffInCart.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button onClick={() => dispatch(removeFromCart(product.id))}>
                Remove from cart
              </button>
            </li>
          ))}
        {stuffInCart && stuffInCart.lenght === 0 && (
          <p>Cart is empty, buy something</p>
        )}
      </ul>
    </div>
  );
};

export default CartCheckoutPage;
