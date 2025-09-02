import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
export const submitInquiry = async (data) => {
  const response = await axios.post(`${BASE_URL}/Inquiry`, data);
  return response.data;
};
