// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // These paths now EXACTLY match your App.jsx routes
    if (role === "Student") {
      navigate("/student/dashboard");
    } else if (role === "Admin") {
      navigate("/admin-dashboard"); // Make sure you have this route in App.jsx
    } else if (role === "Munshi") {
      navigate("/munshi/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back!</h2>
        <p className="text-center text-gray-500 mb-6">Login to continue</p>

        {/* Role Tabs */}
        <div className="flex mb-6 border rounded-lg overflow-hidden">
          {["Student", "Admin", "Munshi"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`flex-1 py-2 font-medium ${
                role === r ? "bg-green-500 text-white" : "bg-gray-100"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Username
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 mb-4 border rounded-lg focus:ring focus:ring-blue-200"
            placeholder="you@example.com"
          />

          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 mb-6 border rounded-lg focus:ring focus:ring-blue-200"
            placeholder="••••••••"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Register here
          </a>
        </p>
      </div>

      <footer className="mt-10 text-gray-500 text-sm text-center">
        © 2025 Smart Hostel Mess Management System. All rights reserved. <br />
        Contact: <a href="mailto:support@hostelmess.com" className="text-blue-600">support@hostelmess.com</a>
      </footer>
    </div>
  );
}