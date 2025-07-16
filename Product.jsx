import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";

const products = [
  { id: 1, name: "Book", price: 200 },
  { id: 2, name: "Pen", price: 50 },
  { id: 3, name: "Notebook", price: 120 },
];

function Products() {
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🛍 Products</h2>
      {products.map((p) => (
        <div
          key={p.id}
          className="flex justify-between items-center mb-3 border p-2"
        >
          <div>
            <h4 className="font-semibold">{p.name}</h4>
            <p>₹{p.price}</p>
          </div>
          <button
            className="bg-green-500 text-white px-4 py-1 rounded"
            onClick={() => dispatch(addToCart(p))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
