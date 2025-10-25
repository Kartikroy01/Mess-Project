import React from "react";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-sky-700 text-center mb-6">
        About Smart Hostel Mess
      </h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>Smart Hostel Mess</strong> system is designed to make daily meal
        management smooth and transparent for both students and mess staff.
        Students can check menus, request mess off, and view reports easily.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each hostel is managed by a <strong>dedicated Munshi</strong> who updates meal
        availability, monitors attendance, and ensures quality food service.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Our goal is to reduce manual record-keeping and create a
        <strong> digital, eco-friendly </strong> environment for hostel operations.
      </p>
    </div>
  );
}
