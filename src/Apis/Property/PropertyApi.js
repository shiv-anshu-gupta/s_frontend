import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const insertProperty = async (propertyData) => {
  const form = new FormData();

  if (propertyData.images?.length) {
    propertyData.images.forEach((file) => {
      form.append("images", file);
    });
  }

  if (propertyData.video) form.append("video", propertyData.video);
  if (propertyData.floor_plan)
    form.append("floor_plan", propertyData.floor_plan);

  if (propertyData.nearby && typeof propertyData.nearby === "object") {
    const nearbyArray = [];
    for (const category in propertyData.nearby) {
      const list = propertyData.nearby[category];
      if (Array.isArray(list)) {
        list.forEach((item) => {
          if (item?.title) {
            nearbyArray.push({
              title: item.title,
              distance: item.distance || "",
            });
          }
        });
      }
    }
    form.append("nearby", JSON.stringify(nearbyArray));
  }

  if (Array.isArray(propertyData.features)) {
    form.append("features", JSON.stringify(propertyData.features));
  }

  const excludeKeys = ["images", "video", "floor_plan", "nearby", "features"];
  for (const [key, value] of Object.entries(propertyData)) {
    if (excludeKeys.includes(key)) continue;
    form.append(key, value?.toString() ?? "");
  }

  const response = await axios.post(`${BASE_URL}/property/create`, form, {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};

export const fetchProperties = async () => {
  const response = await axios.get(`${BASE_URL}/property`);
  return response.data;
};

export const fetchPropertyById = async (id) => {
  const response = await axios.get(`${BASE_URL}/property/${id}`);
  return response.data;
};

export const fetchPropertiesByUserId = async (userId) => {
  if (!userId) throw new Error("User ID is required to fetch properties");
  const response = await axios.get(`${BASE_URL}/property/user/${userId}`);
  return response.data;
};

export const fetchSpecialOffers = async () => {
  const { data: all } = await axios.get(`${BASE_URL}/property`);
  const rentProp = [...all.data]
    .filter((p) => p.type?.toLowerCase() === "rent")
    .sort((a, b) => a.price - b.price)[0];

  const saleProp = [...all.data]
    .filter((p) => p.type?.toLowerCase() === "sale")
    .sort((a, b) => a.price - b.price)[0];

  return { data: [rentProp, saleProp].filter(Boolean) };
};

export const fetchLatestProperties = async () => {
  const response = await axios.get(`${BASE_URL}/property/recent`);
  return response.data;
};

export const searchProperties = async (filters = {}) => {
  const query = new URLSearchParams(filters).toString();
  const response = await axios.get(`${BASE_URL}/property/search?${query}`);
  return response.data;
};

// ✅ NEW FILTERED FETCH FUNCTIONS

export const fetchBuyListings = async () => {
  const response = await axios.get(`${BASE_URL}/property/listings/buy`);
  return response.data;
};

export const fetchRentListings = async () => {
  const response = await axios.get(`${BASE_URL}/property/listings/rent`);
  return response.data;
};

export const fetchOfficeListings = async () => {
  const response = await axios.get(`${BASE_URL}/property/listings/office`);
  return response.data;
};

export const fetchPlotsListings = async () => {
  const response = await axios.get(`${BASE_URL}/property/listings/plots`);
  return response.data;
};

export const fetchAggriculturalListings = async () => {
  const response = await axios.get(
    `${BASE_URL}/property/listings/aggricultural`
  );
  return response.data;
};

export const fetchNewProjectsListings = async () => {
  const response = await axios.get(
    `${BASE_URL}/property/listings/new-projects`
  );
  return response.data;
};

export const updateProperty = async (id, updatedData) => {
  const form = new FormData();

  if (updatedData.images?.length) {
    updatedData.images.forEach((file) => {
      form.append("images", file);
    });
  }

  if (updatedData.video) form.append("video", updatedData.video);
  if (updatedData.floor_plan) form.append("floor_plan", updatedData.floor_plan);

  if (updatedData.nearby && typeof updatedData.nearby === "object") {
    const nearbyArray = [];
    for (const category in updatedData.nearby) {
      const list = updatedData.nearby[category];
      if (Array.isArray(list)) {
        list.forEach((item) => {
          if (item?.title) {
            nearbyArray.push({
              title: item.title,
              distance: item.distance || "",
            });
          }
        });
      }
    }
    form.append("nearby", JSON.stringify(nearbyArray));
  }

  for (const [key, value] of Object.entries(updatedData)) {
    if (["images", "video", "floor_plan", "nearby"].includes(key)) continue;
    if (key === "features" && Array.isArray(value)) {
      form.append("features", JSON.stringify(value));
    } else {
      form.append(key, value?.toString() ?? "");
    }
  }

  const response = await axios.put(`${BASE_URL}/property/${id}`, form, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });

  return response.data;
};

export const deleteProperty = async (id) => {
  const response = await axios.delete(`${BASE_URL}/property/${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const getTotalPropertyCount = async () => {
  const res = await axios.get(`${BASE_URL}/property/count`);
  return res.data.count;
};
