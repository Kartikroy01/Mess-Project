import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // --- Classes for standard NavLinks (Home, Menu, etc.) ---
  // A subtle style: bold white for active, lighter gray for inactive.
  const navLinkClass =
    "px-3 py-2 rounded-lg font-medium text-gray-200 hover:text-white hover:bg-sky-600 transition-colors duration-200";
  const activeNavLinkClass =
    "px-3 py-2 rounded-lg font-medium text-white bg-sky-600";

  // --- Classes for the Login button (unchanged) ---
  const loginLinkClass =
    "px-4 py-2 rounded-lg font-medium bg-white text-sky-700 hover:bg-gray-100 transition-colors duration-200";

  return (
    <nav className="relative bg-sky-700 text-white px-5 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-white">
          NITJ Hostel Mess
        </Link>

        {/* Desktop Menu 
          - This parent div groups the nav links and the login button,
            separating them with 'gap-8'.
        */}
        <div className="hidden md:flex items-center gap-8">
          
          {/* Group for main navigation links, separated by 'gap-4' */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeNavLinkClass : navLinkClass
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? activeNavLinkClass : navLinkClass
              }
            >
              Menu
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeNavLinkClass : navLinkClass
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeNavLinkClass : navLinkClass
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Login button is now separate from the main links */}
          <Link to="/login" className={loginLinkClass}>
            Login
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (unchanged from last good version) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-sky-700 shadow-md z-50">
          <div className="flex flex-col p-4 gap-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded hover:bg-sky-600 text-white"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="block px-3 py-2 rounded hover:bg-sky-600 text-white"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded hover:bg-sky-600 text-white"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded hover:bg-sky-600 text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block bg-white text-sky-700 px-3 py-2 rounded font-semibold text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}