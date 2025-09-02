import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// ✅ Add to Wishlist
export const addToWishlist = async ({ user_id, property_id }) => {
  try {
    const res = await axios.post(`${BASE_URL}/wishlist/create`, {
      user_id,
      property_id,
    });
    return res.data;
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    throw error.response?.data || { error: "Something went wrong" };
  }
};

// ✅ Get Wishlist by User ID
export const getWishlistByUser = async (user_id) => {
  try {
    const res = await axios.get(`${BASE_URL}/wishlist/${user_id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    throw error.response?.data || { error: "Something went wrong" };
  }
};

// ✅ Remove from Wishlist
export const removeFromWishlist = async ({ user_id, property_id }) => {
  try {
    const res = await axios.delete(`${BASE_URL}/wishlist/delete`, {
      data: { user_id, property_id },
    });
    return res.data;
  } catch (error) {
    console.error("Error removing from wishlist:", error);
    throw error.response?.data || { error: "Something went wrong" };
  }
};
export const getAllPropertiesWithWishlist = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/property/with-wishlist`);
    console.log("Fetched properties with wishlist:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching properties with wishlist:", error);
    throw error.response?.data || { error: "Something went wrong" };
  }
};

export const countWishlist = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/wishlist/count`);
    console.log("Fetched properties with wishlist:", res.data);
    return res.data.count;
  } catch (error) {
    console.error("Error fetching properties with wishlist:", error);
    throw error.response?.data || { error: "Something went wrong" };
  }
};
