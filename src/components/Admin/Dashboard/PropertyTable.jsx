import { useEffect, useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { fetchLatestProperties } from "../../../Apis/Property/PropertyApi"; // adjust path as needed

export default function PropertyTable() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const res = await fetchLatestProperties();
        setProperties(res.data || []);
      } catch (err) {
        console.error("❌ Failed to fetch latest properties:", err);
      }
    };

    loadProperties();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Location</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Owner</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((prop) => (
            <tr key={prop.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{prop.title}</td>
              <td className="p-3">{`${prop.city}, ${prop.state}`}</td>
              <td className="p-3">
                ₹{parseInt(prop.price).toLocaleString("en-IN")}
              </td>
              <td className="p-3">
                {new Date(prop.listed_at).toLocaleDateString()}
              </td>
              <td className="p-3">{prop.name}</td>
              <td className="p-3 text-right">
                <MoreHorizontal className="inline cursor-pointer text-muted-foreground" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
