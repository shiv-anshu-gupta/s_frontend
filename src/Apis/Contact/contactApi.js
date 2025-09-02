import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const submitContactForm = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || "Something went wrong");

    return { success: true, message: data.message };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getMessageCount = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/contact/msg`, {
      withCredentials: true,
    });

    if (res.status === 200 && typeof res.data.count === "number") {
      return res.data.count;
    }

    throw new Error(res.data?.error || "Failed to fetch message count");
  } catch (error) {
    console.error("Error fetching message count:", error.message);
    throw error.response?.data || { error: "Something went wrong" };
  }
};

export const getRecentMessages = async () => {
  const response = await axios.get(`${BASE_URL}/contact/recent`);
  return response.data.data;
};
