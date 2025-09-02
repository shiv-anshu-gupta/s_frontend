import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchRequests = async () => {
  const res = await axios.get(`${BASE_URL}/admin/property-requests`, {
    withCredentials: true,
  });
  return res.data.data;
};

export const updateRequestStatus = async (id, status) => {
  const res = await axios.patch(
    `${BASE_URL}/admin/property-requests/${id}`,
    { status },
    { withCredentials: true }
  );
  return res.data;
};
