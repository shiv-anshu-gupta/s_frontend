import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropertyInfoForm from "../components/addPropertyForm/PropertyInfoForm";
import PropertyMediaForm from "../components/addPropertyForm/PropertyMediaForm";
import PropertyLocation from "../components/addPropertyForm/PropertyLocation";
import ExtraInformation from "../components/addPropertyForm/ExtraInformation";
import PropertyFeatures from "../components/addPropertyForm/PropertyFeatures";
import ContactInformation from "../components/addPropertyForm/ContactInformation";
import NearbyPlacesForm from "../components/addPropertyForm/NearByPlaces";

import {
  insertProperty,
  fetchPropertyById,
  updateProperty,
} from "../Apis/Property/PropertyApi";

import { useUser } from "../Context/UserContext";

const AddProperty = () => {
  const { user, loading: userLoading } = useUser();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const editId = searchParams.get("edit");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    type: "",
    sub_type: "",
    area: "",
    price: "",
    beegha: "",
    acres: "",
    images: [],
    video: null,
    floor_plan: null,

    address: "",
    city: "",
    state: "",
    country: "",
    latitude: "",
    longitude: "",

    age: "",
    bedrooms: "",
    bathrooms: "",

    features: [],

    name: "",
    username: "",
    email: "",
    phone: "",

    user_id: null,
    nearby: {},
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [showNearby, setShowNearby] = useState(false);
  const [nearbyData, setNearbyData] = useState({
    Education: [],
    "Health & Medical": [],
    Transportation: [],
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        user_id: user.id,
        name: user.name || "",
        username: user.username || "",
        email: user.email || "",
        phone: user.phone || "",
      }));
    }
  }, [user]);

  useEffect(() => {
    const loadProperty = async () => {
      if (editId) {
        try {
          const res = await fetchPropertyById(editId);
          const property = res.data;

          setFormData((prev) => ({
            ...prev,
            ...property,
            images: [],
            video: null,
            floor_plan: null,
          }));

          if (Array.isArray(property.nearby)) {
            const groupedNearby = {
              Education: [],
              "Health & Medical": [],
              Transportation: [],
            };

            for (const item of property.nearby) {
              const cat = item.category;
              if (groupedNearby[cat]) {
                groupedNearby[cat].push({
                  title: item.title,
                  distance: item.distance,
                });
              }
            }

            setNearbyData(groupedNearby);
          }
        } catch (err) {
          console.error("❌ Failed to load property for edit:", err);
        }
      }
    };

    loadProperty();
  }, [editId]);

  const handleSubmit = async () => {
    setLoading(true);
    setMessage(null);

    try {
      const nearbyArray = [];
      for (const category in nearbyData) {
        nearbyData[category].forEach((item) => {
          const title = item?.title?.trim();
          const distance = item?.distance?.trim();
          if (title) {
            nearbyArray.push({ title, distance, category }); // ✅ Include category
          }
        });
      }

      const fullData = {
        ...formData,
        nearby: nearbyArray,
      };

      let response;
      if (editId) {
        response = await updateProperty(editId, fullData);
        setMessage("✅ Property updated successfully!");
      } else {
        response = await insertProperty(fullData);
        setMessage("✅ Property added successfully!");
      }

      console.log("📦 Submission complete:", response);
    } catch (error) {
      console.error("❌ Submit error:", error);
      setMessage("❌ Failed to submit property: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (userLoading)
    return <div className="text-center py-10">Loading user...</div>;
  if (!user)
    return (
      <div className="text-center py-10 text-red-500">
        Please login to continue.
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
      <h1 className="text-3xl font-bold text-center text-pink-600">
        {editId ? "Edit Property" : "Add New Property"}
      </h1>

      <PropertyInfoForm formData={formData} setFormData={setFormData} />
      <PropertyMediaForm formData={formData} setFormData={setFormData} />
      <PropertyLocation formData={formData} setFormData={setFormData} />
      <ExtraInformation formData={formData} setFormData={setFormData} />
      <PropertyFeatures formData={formData} setFormData={setFormData} />
      <ContactInformation formData={formData} setFormData={setFormData} />

      <div className="flex flex-col items-start space-y-4">
        <button
          onClick={() => setShowNearby(!showNearby)}
          className={`px-4 py-2 text-white font-medium rounded transition duration-200 ${
            showNearby
              ? "bg-red-500 hover:bg-red-600"
              : "bg-pink-600 hover:bg-pink-700"
          }`}
        >
          {showNearby ? "Hide Nearby Places" : "Add Nearby Places"}
        </button>

        {showNearby && (
          <NearbyPlacesForm
            nearbyData={nearbyData}
            setNearbyData={setNearbyData}
          />
        )}
      </div>

      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded"
          disabled={loading}
        >
          {loading
            ? editId
              ? "Updating..."
              : "Submitting..."
            : editId
            ? "Update Property"
            : "Submit Property"}
        </button>
        {message && (
          <p className="mt-4 text-sm text-center text-red-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default AddProperty;
