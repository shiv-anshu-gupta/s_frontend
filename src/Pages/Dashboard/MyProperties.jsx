import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "../../components/ui/button";
import PropertiesTable from "../../components/Admin/propertiesTable";
import { useUser } from "../../Context/UserContext";
import {
  fetchPropertiesByUserId,
  deleteProperty,
} from "../../Apis/Property/PropertyApi";
import { useNavigate } from "react-router-dom";

const MyProperties = () => {
  const { user, loading: userLoading } = useUser();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ Moved inside component

  useEffect(() => {
    const fetchUserProperties = async () => {
      if (!user || userLoading) return;

      try {
        const res = await fetchPropertiesByUserId(user.id);
        setProperties(res?.data || []);
      } catch (err) {
        toast.error("Failed to load properties");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProperties();
  }, [user, userLoading]);

  const handleEdit = (property) => {
    navigate(`/admin?edit=${property.id}`);
  };

  const handleAdd = () => {
    navigate("/admin");
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this property?"
    );
    if (!confirmed) return;

    try {
      await deleteProperty(id);
      setProperties((prev) => prev.filter((p) => p.id !== id));
      toast.success("Property deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete property");
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">My Properties</h2>
        <Button onClick={handleAdd}>+ Add Property</Button>
      </div>

      {loading ? (
        <p className="text-sm text-gray-500">Loading properties...</p>
      ) : (
        <PropertiesTable
          properties={properties}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default MyProperties;
