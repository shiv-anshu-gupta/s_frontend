import { useEffect, useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Building, Star, MessageCircle, Heart } from "lucide-react";
import { getMessageCount } from "../../../Apis/Contact/contactApi"; // Adjust the path
import { getTotalPropertyCount } from "../../../Apis/Property/PropertyApi"; // Adjust the path
import { countWishlist } from "../../../Apis/Property/addToWishList";
export default function DashboardCards() {
  const [messageCount, setMessageCount] = useState(null);
  const [propertyCount, setPropertyCount] = useState(null);
  const [wishCount, setWishCount] = useState(null);
  useEffect(() => {
    async function fetchCount() {
      try {
        const count = await getMessageCount();
        setMessageCount(count);
      } catch (error) {
        console.error("Failed to load message count:", error);
        setMessageCount(0);
      }
    }
    async function fetchPropertyCount() {
      try {
        const count = await getTotalPropertyCount();
        setPropertyCount(count);
      } catch (error) {
        console.error("Failed to load message count:", error);
        setPropertyCount(0);
      }
    }
    async function fetchWishCount() {
      try {
        const count = await countWishlist();
        setWishCount(count);
      } catch (error) {
        console.error("Failed to load message count:", error);
        setWishCount(0);
      }
    }
    fetchWishCount();
    fetchPropertyCount();
    fetchCount();
  }, []);

  const stats = [
    {
      title: "Published Properties",
      count: propertyCount !== null ? propertyCount : "—",
      icon: <Building className="text-blue-600" size={28} />,
    },
    {
      title: "Total Reviews",
      count: "comming soon",
      icon: <Star className="text-yellow-500" size={28} />,
    },
    {
      title: "Messages",
      count: messageCount !== null ? messageCount : "—",
      icon: <MessageCircle className="text-green-600" size={28} />,
    },
    {
      title: "Wishlisted",
      count: wishCount !== null ? wishCount : "—",
      icon: <Heart className="text-red-600" size={28} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <Card key={i} className="flex items-center gap-4 p-4 shadow-md">
          {stat.icon}
          <CardContent className="p-0">
            <p className="text-muted-foreground text-sm">{stat.title}</p>
            <h2 className="text-xl font-bold">{stat.count}</h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
