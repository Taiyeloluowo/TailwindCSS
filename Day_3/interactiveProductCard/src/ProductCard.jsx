export default function ProductCard() {
  return (
    <div className="bg-blue-100 w-full h-screen flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-lg  w-[300px] h-[400px] flex flex-col items-center transition-transform duration-500 hover:scale-105">
        {/* Product Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src="https://i.pinimg.com/736x/df/17/55/df17555a8ce3e504047cfb675208e1ee.jpg"
            alt="Agbada"
            className="w-[300px] h-64 object-cover rounded-xl transform transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Product Name */}
        <p className="mt-4 text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-700">
          Agbada for Men
        </p>

        {/* Product Price */}
        <p className="text-lg font-medium text-green-600">₦48,000</p>

        {/* Add to Cart Button */}
        <button
          className="mt-4 bg-green-600 text-white w-32 h-10 rounded-lg font-medium
                     transition-all duration-300 hover:bg-green-800 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}