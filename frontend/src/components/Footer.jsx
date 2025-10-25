import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Smart Hostel Mess</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            A digital solution to manage hostel meals efficiently. Students and
            munshis can track food, attendance, and reports — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-yellow-300 transition">Menu</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-200 text-sm">
            📍 Hostel Office, ABC College Campus <br />
            📞 +91 98765 43210 <br />
            ✉️ support@smartmess.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-sky-900 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Smart Hostel Mess | All Rights Reserved
      </div>
    </footer>
  );
}
