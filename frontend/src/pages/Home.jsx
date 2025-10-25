import React, { useState } from "react";
import HeroSection from "./herosection.jsx";

const menuItems = [
  {
    name: "Paneer Masala",
    desc: "Rich and creamy cottage cheese curry.",
    price: 60,
    type: "Dinner",
    color: "bg-red-500",
  },
  {
    name: "Veg Biryani",
    desc: "Fragrant rice with vegetables.",
    price: 80,
    type: "Lunch",
    color: "bg-orange-500",
  },
  {
    name: "Aloo Paratha",
    desc: "Wheat bread with spiced potatoes.",
    price: 40,
    type: "Breakfast",
    color: "bg-yellow-400",
  },
  {
    name: "Gulab Jamun",
    desc: "Soft fried dough balls in syrup.",
    price: 25,
    type: "Snacks",
    color: "bg-green-500",
  },
  {
    name: "Masala Dosa",
    desc: "Crispy crepe with potato filling.",
    price: 40,
    type: "Breakfast",
    color: "bg-teal-500",
  },
  {
    name: "Samosa",
    desc: "Crispy pastry with chickpeas.",
    price: 20,
    type: "Snacks",
    color: "bg-sky-500",
  },
  {
    name: "Rajma Chawal",
    desc: "Kidney beans curry with rice.",
    price: 70,
    type: "Lunch",
    color: "bg-purple-500",
  },
  {
    name: "Poha",
    desc: "Flattened rice cooked with spices.",
    price: 30,
    type: "Breakfast",
    color: "bg-pink-500",
  },
  {
    name: "Vada Pav",
    desc: "Spicy potato fritter in a bun.",
    price: 25,
    type: "Snacks",
    color: "bg-indigo-500",
  },
  {
    name: "Dal Makhani",
    desc: "Creamy black lentil curry.",
    price: 65,
    type: "Dinner",
    color: "bg-blue-500",
  },
  {
    name: "Chai",
    desc: "Indian spiced tea.",
    price: 15,
    type: "Snacks",
    color: "bg-lime-500",
  },
  {
    name: "Butter Chicken",
    desc: "Creamy tomato-based chicken curry.",
    price: 90,
    type: "Dinner",
    color: "bg-rose-500",
  },
];

export default function Home() {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? menuItems
      : menuItems.filter((item) => item.type === filter);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      {/* Hero Section - Enhanced */}
      {/* <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Smart Hostel Mess
          </h1>
          <p className="text-xl text-sky-50 max-w-2xl mx-auto leading-relaxed">
            Efficient, transparent, and smart mess management at your fingertips
          </p>
        </div>
      </div> */}

      <HeroSection />

      {/* Filter Section - Enhanced */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-center items-center gap-3 flex-wrap">
          <span className="text-gray-400 text-sm font-medium mr-2">
            Filter by:
          </span>
          {["All", "Breakfast", "Lunch", "Snacks", "Dinner"].map((type) => (
            <button
              key={type}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === type
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/50 scale-105"
                  : "bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white"
              }`}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Cards - Professional Redesign */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, i) => (
            <div
              key={i}
              className="group relative bg-slate-800 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-sky-500/20 border border-slate-700"
            >
              {/* Color Header with Gradient Overlay */}
              <div className={`relative h-44 ${item.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-semibold uppercase tracking-wide">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Card Content - Enhanced Typography */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-sky-400 transition-colors">
                  {item.name}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 min-h-[2.5rem]">
                  {item.desc}
                </p>

                {/* Price and Action Row */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-sky-400">
                      ₹{item.price}
                    </span>
                    <span className="text-gray-500 text-sm">.00</span>
                  </div>
                  <button className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/50">
                    Order
                  </button>
                </div>
              </div>

              {/* Decorative Gradient Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-sky-500/5 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-sky-400 mb-2">
                {menuItems.length}
              </div>
              <div className="text-gray-400 text-sm">Total Items</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-400 mb-2">
                ₹{Math.min(...menuItems.map((i) => i.price))}
              </div>
              <div className="text-gray-400 text-sm">Starting From</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-400 mb-2">4</div>
              <div className="text-gray-400 text-sm">Meal Categories</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
