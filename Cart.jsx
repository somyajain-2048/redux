import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "./CartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🛒 Your Cart</h2>
      {cartItems.length === 0 && <p>No items in cart.</p>}
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center mb-3 border p-2"
        >
          <div>
            <h4 className="font-semibold">{item.name}</h4>
            <p>
              ₹{item.price} × {item.quantity}
            </p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => dispatch(decreaseQty(item.id))}>➖</button>
            <button onClick={() => dispatch(increaseQty(item.id))}>➕</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>🗑</button>
          </div>
        </div>
      ))}
      <p className="mt-4 font-bold">Total: ₹{totalAmount}</p>
    </div>
  );
}

export default Cart;
