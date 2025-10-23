import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
  };

  const renderStars = (rating) => {
    if (!rating) return null;
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-xl ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
        >
          ★
        </span>
      );
    }
    return <div className="flex justify-center md:justify-start">{stars}</div>;
  };

  return (
    <div className="relative p-4 flex flex-col items-center text-center md:items-start md:text-left border rounded-lg shadow-sm">
      {/* Sale Tag */}
      {product.isSale && (
        <div className="absolute top-0 right-0 transform -translate-x-4 translate-y-4">
          <div className="bg-blue-600 text-white text-xs font-bold px-4 py-1 transform rotate-45 shadow-lg">
            Sale!
          </div>
        </div>
      )}

      {/* Product Image */}
      <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4 border border-gray-200 rounded">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
      {renderStars(product.rating)}

      <div>
        {product.isSale ? (
          <p className="text-xl font-bold text-gray-900 mt-1">
            <span className="line-through text-base font-normal text-gray-500 mr-2">
              ${product.originalPrice.toFixed(2)}
            </span>
            ${product.price.toFixed(2)}
          </p>
        ) : (
          <p className="text-xl font-bold text-gray-900 mt-1">
            ${product.price.toFixed(2)}
          </p>
        )}
      </div>

      {/* Add to Cart / View Cart */}
      {added ? (
        <Link
          to="/cart"
          className="mt-3 px-6 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition duration-150 ease-in-out shadow-md"
        >
          View Cart →
        </Link>
      ) : (
        <button
          onClick={handleAddToCart}
          className="mt-3 px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-150 ease-in-out shadow-md"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
