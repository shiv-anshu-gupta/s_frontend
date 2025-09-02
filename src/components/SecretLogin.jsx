import { useState } from "react";
import { loginAsSuperadmin } from "../Apis/user/userApi";
import { useUser } from "../Context/UserContext"; // ✅ import context
import { useNavigate } from "react-router-dom"; // ✅ for redirection

export default function SecretLogin() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useUser(); // ✅ access user context
  const navigate = useNavigate(); // ✅ for routing

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await loginAsSuperadmin({ phone, password });

      if (data?.user) {
        login(data.user); // ✅ store user in context
        navigate("/admin"); // ✅ redirect after login
      } else {
        setError("Invalid response");
      }
    } catch (err) {
      setError(err?.response?.data?.error || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-md border border-gray-300 rounded">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Superadmin Login
        </h2>

        {error && (
          <p className="mb-4 text-red-600 text-sm text-center">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Mobile Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-xs text-center mt-4 text-gray-500">
          Access restricted to authorized superadmins only.
        </p>
      </div>
    </div>
  );
}
