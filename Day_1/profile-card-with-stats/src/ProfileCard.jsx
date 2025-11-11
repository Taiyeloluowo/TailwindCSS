import React from "react";
import avatar from './assets/taiwo.jpeg';

const ProfileCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border      border-gray-200">
      {/* Header */}
      <div className="relative h-32 bg-linear-to-r from-[#008751] via-white to-[#008751] rounded-t-3xl">
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
          <img
            src={avatar} alt="Avatar"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-8 pt-16 pb-8 text-center">
        {/* Name & Title */}
        <h2 className="text-2xl font-bold text-green-900">Taiwo Oluwagbotemi</h2>
        <p className="text-gray-600 mt-1">Software & AI Developer</p>
        <p className="text-gray-500 text-sm mt-1">Ogun State, Nigeria 🇳🇬</p>

        {/* Stats Section (horizontal card style) */}
        <div className="mt-6 flex justify-between gap-4">
          <div className="flex-1 bg-yellow-50 rounded-xl py-4 shadow-inner border border-yellow-100">
            <h3 className="text-lg font-bold text-blue-800">1.36M</h3>
            <p className="text-xs text-blue-700 mt-1">Followers</p>
          </div>
          <div className="flex-1 bg-blue-50 rounded-xl py-4 shadow-inner border border-blue-100">
            <h3 className="text-lg font-bold text-yellow-800">3060</h3>
            <p className="text-xs text-yellow-700 mt-1">Posts</p>
          </div>
          <div className="flex-1 bg-red-50 rounded-xl py-4 shadow-inner border border-red-100">
            <h3 className="text-lg font-bold text-red-800">2.63M</h3>
            <p className="text-xs text-red-700 mt-1">Likes</p>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-6 text-gray-700 text-sm leading-relaxed">
          Building the most desirable AI fellowship in Africa.
        </p>

        {/* Follow Button */}
        <button className="mt-6 w-full bg-[#002f87] text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition">
          Follow
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;