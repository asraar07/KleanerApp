import React from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useCart();

  const subtotal = cart
    .reduce(
      (total, item) =>
        total + (item.salePrice || item.price || item.originalPrice) * item.quantity,
      0
    )
    .toFixed(2);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* Coupon notice */}
      <div className="bg-blue-50 border border-blue-200 text-blue-700 p-3 rounded mb-8">
        <span className="font-medium">Have a coupon?</span>{" "}
        <a href="#" className="underline hover:text-blue-800">
          Click here to enter your code
        </a>
      </div>

      {/* Billing + Additional info */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Billing details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing details</h2>
          <form className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="First name *" className="border p-2 rounded" />
              <input type="text" placeholder="Last name *" className="border p-2 rounded" />
            </div>
            <input type="text" placeholder="Company name (optional)" className="border p-2 rounded" />
            <select className="border p-2 rounded">
              <option>United States (US)</option>
              <option>India</option>
              <option>UK</option>
            </select>
            <input type="text" placeholder="Street address *" className="border p-2 rounded" />
            <input type="text" placeholder="Apartment, suite, etc. (optional)" className="border p-2 rounded" />
            <input type="text" placeholder="Town / City *" className="border p-2 rounded" />
            <input type="text" placeholder="State *" className="border p-2 rounded" />
            <input type="text" placeholder="ZIP Code *" className="border p-2 rounded" />
            <input type="text" placeholder="Phone *" className="border p-2 rounded" />
            <input type="email" placeholder="Email address *" className="border p-2 rounded" />
          </form>
        </div>

        {/* Additional info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Additional information</h2>
          <textarea
            className="border p-2 rounded w-full h-40"
            placeholder="Notes about your order, e.g. special notes for delivery."
          />
        </div>
      </div>

      {/* Order Summary */}
      <div className="mt-10 border rounded">
        <h2 className="bg-blue-600 text-white p-4 rounded-t font-semibold">Your order</h2>
        <div className="p-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2">Product</th>
                <th className="p-2 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2">
                    {item.name} × {item.quantity}
                  </td>
                  <td className="p-2 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
              <tr className="border-t">
                <td className="p-2 font-semibold">Subtotal</td>
                <td className="p-2 text-right">${subtotal}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">Total</td>
                <td className="p-2 text-right font-bold">${subtotal}</td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm text-gray-600 mt-4 border-t pt-4">
            Sorry, it seems that there are no available payment methods. Please
            contact us if you require assistance or wish to make alternate arrangements.
          </p>

          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
