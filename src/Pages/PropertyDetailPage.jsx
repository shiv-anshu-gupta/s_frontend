import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Gallery from "../components/productDetails/Gallery";
import TourForm from "../components/productDetails/TourForm";
import AgentInfo from "../components/productDetails/AgentInfo";
import PropertyDescription from "../components/productDetails/PropertyDescription";
import PropertyFactsCard from "../components/productDetails/PropertyFactsCard";
import PropertyLayoutCard from "../components/productDetails/PropertyLayout";
import NearbyPlacesCard from "../components/productDetails/NearbyPlaces";
import PropertyVideoTour from "../components/productDetails/PropertyVideo";
import PropertyLocationCard from "../components/productDetails/PropertyLocation";
import PropertyReviewList from "../components/productDetails/PropertyReviewList";
import AddReviewForm from "../components/productDetails/AddReviewForm";
import RecentProperties from "../components/productDetails/RecentProperties";
import FeaturedProperties from "../components/productDetails/FeaturedProperties";
import { fetchPropertyById } from "../Apis/Property/PropertyApi";
import PageHeaderCard from "../components/PageHeaderCard";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProperty = async () => {
      try {
        const response = await fetchPropertyById(id);
        setProperty(response.data);
      } catch (err) {
        console.error("Error fetching property:", err);
        setError("Failed to load property.");
      } finally {
        setLoading(false);
      }
    };

    getProperty();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!property)
    return <p className="text-center mt-10">Property not found.</p>;

  return (
    <>
      {/* ✅ Reusable Header with Breadcrumbs */}
      <PageHeaderCard title={property.title} />

      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <section className="md:col-span-2 space-y-6">
          {/* Property Info */}
          <div>
            <p className="text-sm text-gray-600 mt-1">{property.address}</p>
            <span className="inline-block bg-[rgb(14,28,130)] text-white text-xs px-2 py-1 rounded mt-2 capitalize">
              {property.type}
            </span>
            <p className="text-2xl font-semibold text-black mt-2">
              ₹{property.price.toLocaleString("en-IN")}{" "}
              <span className="text-sm text-gray-500">
                / {property.area} sq ft
              </span>
            </p>
          </div>

          <Gallery images={property.images} />
          <PropertyDescription description={property.description} />
          <PropertyFactsCard property={property} />
          <PropertyLayoutCard floorPlan={property.floor_plan} />
          <NearbyPlacesCard city={property.nearby} />
          <PropertyVideoTour video={property.video} />
          <AddReviewForm propertyId={property.id} />
        </section>

        {/* Right Section */}
        <aside className="space-y-6">
          <TourForm propertyId={property.id} />
          <AgentInfo
            agent={{
              name: property.name,
              email: property.email,
              phone: property.phone,
              address: property.address,
              role: "Listing Agent",
              image: "/uploads/agents/john.jpg",
            }}
          />
          <RecentProperties />
          <FeaturedProperties />
        </aside>
      </div>
    </>
  );
};

export default PropertyDetailPage;
