import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // ✅ sends cookies
});

// ✅ Login or register user by phone number (normal users)
export const loginWithPhone = async ({ name, phone }) => {
  const response = await axiosInstance.post("/user/login", {
    name,
    phone,
  });
  return response.data;
};

// ✅ Superadmin login using fixed password
export const loginAsSuperadmin = async ({ phone, password }) => {
  const response = await axiosInstance.post("/user/secret", {
    phone,
    password,
  });
  return response.data;
};

// ✅ Get profile (protected route)
export const getProfile = async () => {
  const response = await axiosInstance.get("/user/profile");
  return response.data;
};

// ✅ Logout
export const logout = async () => {
  const response = await axiosInstance.post("/user/logout");
  return response.data;
};
