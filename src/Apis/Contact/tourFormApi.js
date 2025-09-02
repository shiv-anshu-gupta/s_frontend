// Apis/Contact/tourFormApi.js
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const requestTour = async ({
  user_id,
  property_id,
  tour_date,
  tour_time,
}) => {
  console.log("Requesting tour with data:", {
    user_id,
    property_id,
    tour_date,
    tour_time,
  });
  const res = await fetch(`${BASE_URL}/tour`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // include cookies for auth if needed
    body: JSON.stringify({ user_id, property_id, tour_date, tour_time }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to request tour");
  }

  return data;
};
