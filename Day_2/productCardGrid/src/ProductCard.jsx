import React from "react";
import jollof from "./assets/Jollof Rice.png";
import ankara from "./assets/Ankara Fabric.jpg";
import suya from "./assets/Suya.jpg";
import asoEbi from "./assets/Aso-Ebi.jpg";
import palmWine from "./assets/Palm Wine.jpg";
import agbada from "./assets/Agbada.jpg";
import chinChin from "./assets/Chin Chin.jpg";
import puffPuff from "./assets/Puff Puff.jpg";

const products = [
  { name: "Jollof Rice", price: "₦1,500", img: jollof },
  { name: "Ankara Fabric", price: "₦5,000", img: ankara },
  { name: "Suya", price: "₦1,000", img: suya },
  { name: "Aso-Ebi", price: "₦15,000", img: asoEbi },
  { name: "Palm Wine", price: "₦1,200", img: palmWine },
  { name: "Agbada", price: "₦25,000", img: agbada },
  { name: "Chin Chin", price: "₦500", img: chinChin },
  { name: "Puff Puff", price: "₦300", img: puffPuff },
];

const ProductCard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          NCC Marketplace 🇳🇬
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-green-700 font-bold mt-2">{product.price}</p>
                <button className="mt-4 w-full bg-green-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-800 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;