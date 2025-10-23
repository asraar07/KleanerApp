import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate subtotal and total
  const subtotal = cart
    .reduce(
      (total, item) =>
        total + (item.salePrice || item.price || item.originalPrice) * item.quantity,
      0
    )
    .toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link to="/shop" className="text-sky-600 hover:underline font-medium">
          Go back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Cart Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-sky-600 text-white text-left">
                <th className="p-3 w-10"></th>
                <th className="p-3">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const price = item.salePrice || item.price || item.originalPrice;
                const itemSubtotal = (price * item.quantity).toFixed(2);
                return (
                  <tr key={item.id} className="border-b">
                    <td
                      className="p-3 text-center text-red-600 cursor-pointer"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✖
                    </td>
                    <td className="p-3 flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 object-contain bg-gray-100 rounded"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="p-3">${price.toFixed(2)}</td>
                    <td className="p-3">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="w-16 border rounded text-center"
                      />
                    </td>
                    <td className="p-3">${itemSubtotal}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Coupon + Update Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="text"
              placeholder="Coupon code"
              className="border rounded px-4 py-2 w-full md:w-60"
            />
            <button className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700">
              Apply coupon
            </button>
          </div>

          <button className="bg-sky-300 text-sky-700 px-4 py-2 rounded hover:bg-sky-400">
            Update cart
          </button>
        </div>

        {/* Cart Totals Section */}
        <div className="mt-10 flex justify-end">
          <div className="w-full md:w-96 border border-gray-200 rounded">
            <h2 className="bg-gray-50 border-b p-4 font-semibold text-lg">
              Cart totals
            </h2>
            <div className="p-4 border-b flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="p-4 border-b flex justify-between">
              <span>Total</span>
              <span className="font-semibold">${subtotal}</span>
            </div>
            <div className="p-4">
                <Link
    to="/checkout"
    className="block text-center bg-sky-600 text-white py-3 rounded hover:bg-sky-700"
  >
    Proceed to checkout
  </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
