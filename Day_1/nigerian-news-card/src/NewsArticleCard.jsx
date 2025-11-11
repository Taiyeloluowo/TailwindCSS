import React from "react";
import newscard from './assets/Newscard.png';


const NewsCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
      {/* Featured Image */}
      <div className="relative">
        <img
          src={newscard} 
          alt="News Cover"
          className="w-full h-48 object-cover"
        />
        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-[#008751] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          Landed Property
        </span>
      </div>

      {/* News Content */}
      <div className="p-6">
        {/* Headline */}
        <h2 className="text-xl font-bold text-gray-900 leading-snug">
          Wike, military officer clash over alleged land grabbing in Abuja
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-3">There was a heated confrontation on Tuesday between the Minister of the Federal Capital Territory, Nyesom Wike, and an unidentified military officer over an alleged land-grabbing incident at the Gaduwa District in Abuja.

A video of the altercation, obtained by our correspondent, showed Wike accusing the officer of illegally taking possession of a parcel of land.

The visibly angry minister questioned why the military was laying claim to the property simply because it was linked to a former Chief of Naval Staff.

“Because you are an officer? Nobody does that. The man took land because he was the Chief of Naval Staff?” Wike said.
        </p>

        {/* Author and Meta Info */}
        <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
          <div>
            <p className="font-medium text-gray-700">By <span className="text-[#008751]">Taiwo Oluwagbotemi</span></p>
            <p>Nov 11, 2025</p>
          </div>
          <div className="flex items-center gap-1">
            <span>2 min read</span>
          </div>
        </div>

        {/* Read More Link */}
        <div className="mt-5">
          <a
            href="#"
            className="inline-block text-[#008751] font-semibold hover:underline transition"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;