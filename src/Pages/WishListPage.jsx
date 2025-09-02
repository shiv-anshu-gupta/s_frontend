import React, { useEffect, useState } from "react";
import { useUser } from "../Context/UserContext";
import PropertyCard from "../components/PropertyCard";
import { getWishlistByUser } from "../Apis/Property/addToWishList";
import WishlistHeaderCard from "../components/WishlistHeaderCard"; // ✅ Only needed import

const WishlistPage = () => {
  const { user } = useUser();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchWishlist = async () => {
      try {
        const data = await getWishlistByUser(user.id);
        setWishlist(data || []);
      } catch (err) {
        console.error("Failed to fetch wishlist:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [user]);

  if (!user) {
    return (
      <div className="p-6 text-center text-red-500">
        Please log in to view your wishlist.
      </div>
    );
  }

  if (loading) {
    return <div className="p-6 text-center">Loading wishlist...</div>;
  }

  if (wishlist.length === 0) {
    return (
      <div>
        <WishlistHeaderCard />
        <div className="p-6 text-center text-gray-600">
          You haven't added any properties to your wishlist yet.
        </div>
      </div>
    );
  }

  return (
    <div>
      <WishlistHeaderCard />
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((prop) => (
            <PropertyCard key={prop.id} prop={prop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
