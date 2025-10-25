import React, { useState } from "react";

export default function ChangePassword() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (newPass !== confirmPass) return alert("Passwords do not match!");
    alert("Password changed successfully!");
    setOldPass("");
    setNewPass("");
    setConfirmPass("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-sky-700 mb-6">Change Password</h1>
      <form
        onSubmit={handleChange}
        className="bg-white shadow-md p-6 rounded-2xl max-w-lg space-y-4"
      >
        <input
          type="password"
          placeholder="Old Password"
          value={oldPass}
          onChange={(e) => setOldPass(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
          required
        />
        <button
          type="submit"
          className="bg-sky-700 text-white px-4 py-2 rounded-lg hover:bg-sky-600"
        >
          Change Password
        </button>
      </form>
    </div>
  );
}
