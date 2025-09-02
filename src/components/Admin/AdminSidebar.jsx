import React from "react";
import { Link } from "react-router-dom";
import { Home, Users, Settings, Building, X } from "lucide-react";
import { useUser } from "../../Context/UserContext"; // adjust the path as needed

const AdminSidebar = ({ isOpen, onClose }) => {
  const { user } = useUser(); // 👈 gets user from context

  const menu = [
    { icon: <Home size={16} />, label: "Dashboard", path: "/admin/dashboard" },
    {
      icon: <Building size={16} />,
      label: "MyProperties",
      path: "/admin/properties",
    },
    ...(user?.role !== "buyer"
      ? [{ icon: <Users size={16} />, label: "Users", path: "/admin/users" }]
      : []),
    {
      icon: <Settings size={16} />,
      label: "Settings",
      path: "/admin/settings",
    },
  ];

  return (
    <aside
      className={`fixed z-50 top-0 left-0 h-full w-64 bg-white border-r p-4 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:relative md:translate-x-0 md:w-64 md:block`}
    >
      {/* Mobile Close Button */}
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h2 className="text-lg font-semibold">Admin Menu</h2>
        <button onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <nav className="space-y-4">
        {menu.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={onClose}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 text-sm font-medium text-gray-700"
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
