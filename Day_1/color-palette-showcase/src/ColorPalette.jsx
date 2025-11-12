import React from "react";

const ColorPalette = [
  { name: "Naija Green 050", hex: "#98FB98" },
  { name: "Naija Green 100", hex: "#00FA9A" },
  { name: "Naija Green 200", hex: "#ADFF2F" },
  { name: "Naija Green 300", hex: "#7CFC00" },
  { name: "Naija Green 400", hex: "#00FF00" },
  { name: "Naija Green 500", hex: "#32CD32" },
  { name: "Naija Green 600", hex: "#3CB371" },
  { name: "Naija Green 700", hex: "#2E8B57" },
  { name: "Naija Green 800", hex: "#228B22" },
  { name: "Naija Green 900", hex: "#006400" },
];

 
const ColorShowcase = () => {
  return (
    <div className="min-h-screen bg-green-10 py-10 px-5">
      <div >
        <h1 className="text-center text-xl font-extrabold text-green-900">Naija Flag Colours 🇳🇬</h1>
        <p className=" text-center text-green-700 mt-3 mb-5">Naija Green in all shades</p>
      </div>

      <div className="flex justify-center gap-8 flex-wrap">
        {ColorPalette.map((shade, i) => (
          <div
            key={i}
            className="w-36 h-36 rounded-2xl shadow-lg hover:scale-105 transition-transform border border-gray-200"
            style={{ backgroundColor: shade.hex }}
          >
            <div className="p-4 text-center mt-12 bg-white/70 backdrop-blur-sm rounded-b-2xl">
              <p className="font-semibold text-gray-800">{shade.name}</p>
              <p className="text-xs text-gray-500">{shade.hex}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorShowcase;