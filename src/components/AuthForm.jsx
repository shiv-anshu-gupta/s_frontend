import React, { useState } from "react";
import { loginWithPhone } from "../Apis/user/userApi";
import { useUser } from "../Context/UserContext";
import { Phone, UserCheck } from "lucide-react"; // optional icons

const AuthForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { login } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await loginWithPhone({ name, phone });
      if (res?.user) login(res.user);
      setMessage("✅ Submitted successfully");
      setTimeout(() => onClose?.(), 1000);
    } catch (error) {
      const msg =
        error?.response?.data?.error || "❌ Submission failed. Try again.";
      setMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl p-6 animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Discover the best <span className="text-blue-600">Properties</span>
        </h2>
        <p className="text-sm text-gray-500">
          Enter your details to get started
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
          <UserCheck className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full outline-none bg-transparent text-sm"
          />
        </div>

        <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
          <Phone className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full outline-none bg-transparent text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2.5 rounded-lg shadow-md disabled:opacity-60"
        >
          {loading ? "Please wait..." : "Get Best Properties >>>"}
        </button>
      </form>

      {message && (
        <div className="text-center mt-4 text-sm text-gray-700">{message}</div>
      )}
    </div>
  );
};

export default AuthForm;
