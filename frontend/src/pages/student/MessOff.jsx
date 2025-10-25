import React, { useState } from "react";

export default function MessOff() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [mealType, setMealType] = useState("Breakfast");
  const [applications, setApplications] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = { fromDate, toDate, mealType, status: "Pending" };
    setApplications([...applications, newApplication]);
    setFromDate("");
    setToDate("");
    setMealType("Breakfast");
    alert("Mess off request submitted to Munshi!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-sky-700 mb-6">Apply for Mess Off</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded-2xl space-y-4 max-w-lg"
      >
        <div>
          <label className="block text-gray-700 mb-1">From Date</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">To Date</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Meal Type</label>
          <select
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-sky-700 text-white px-4 py-2 rounded-lg hover:bg-sky-600"
        >
          Submit Request
        </button>
      </form>

      {/* View Applications */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-sky-700 mb-4">
          Your Past Applications
        </h2>
        {applications.length === 0 ? (
          <p className="text-gray-600">No previous applications found.</p>
        ) : (
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-sky-700 text-white">
                <th className="p-2">From</th>
                <th className="p-2">To</th>
                <th className="p-2">Meal</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, i) => (
                <tr key={i} className="text-center border-b">
                  <td className="p-2">{app.fromDate}</td>
                  <td className="p-2">{app.toDate}</td>
                  <td className="p-2">{app.mealType}</td>
                  <td className="p-2 text-yellow-600 font-semibold">{app.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
