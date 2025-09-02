"use client";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { useUser } from "../Context/UserContext";

export default function Navbar({ onSignInClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, loading } = useUser();

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "Listings",
      dropdown: [
        { name: "All Listings", href: "/list" },
        { name: "Buy", href: "/properties/buy" },
        { name: "Rent", href: "/properties/rent" },
        { name: "Offices", href: "/properties/office" },
        { name: "Agricultural", href: "/properties/agricultural" },
        { name: "Plots", href: "/properties/plots" },
        { name: "Farm House", href: "/properties/farmhouse" },
        { name: "New Projects", href: "/properties/new-projects" },
      ],
    },
    { name: "Loan", href: "/loan" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLogout = async () => {
    await logout();
    navigate("/");
    setMobileOpen(false);
  };

  const isActive = (href) => location.pathname === href;

  return (
    <header className=" top-0 z-50 bg-transparent shadow-sm">
      <div className="max-w-full mx-auto flex items-center justify-between h-[66px] pl-14">
        <img
          src="/ssrs.png"
          alt="Logo"
          className="h-[66px] w-auto object-contain cursor-pointer "
          onClick={() => navigate("/")}
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center justify-center gap-6 w-1/2">
          {menuItems.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`relative font-maven whitespace-nowrap font-semibold text-[16px] py-[13px] px-[20px] text-white flex items-center gap-1
                      after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white
                      after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out
                      ${
                        item.dropdown.some(
                          (opt) => location.pathname === opt.href
                        )
                          ? "after:w-full text-white"
                          : ""
                      }`}
                  >
                    {item.name}
                    <ChevronDown size={18} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {item.dropdown.map((opt) => (
                    <DropdownMenuItem
                      key={opt.name}
                      onClick={() => navigate(opt.href)}
                      className="cursor-pointer text-sm"
                    >
                      {opt.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className={`relative font-maven text-[16px] font-semibold whitespace-nowrap py-[13px] px-[20px] text-white
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white
                  after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out
                  ${isActive(item.href) ? "after:w-full text-white" : ""}`}
              >
                {item.name}
              </button>
            )
          )}
        </nav>

        {/* Right - Auth/Profile */}
        <div className="hidden md:flex items-center justify-end gap-4 w-1/5 relative">
          {!loading && user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-white hover:text-white text-[16px] whitespace-nowrap transition-none"
                  >
                    <User size={18} />
                    Hi, {user.name?.split(" ")[0] || "User"}
                    <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem onClick={() => navigate("/admin")}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/wishlist")}>
                    Wishlist
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                onClick={() => navigate("/admin")}
                className="text-[#1D2D5E] bg-white border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-100 transition ml-3 mr-8"
              >
                <Plus size={20} className="mr-2" />
                Add Listing
              </Button>
            </>
          ) : (
            <Button
              onClick={onSignInClick}
              className="text-[#1D2D5E] bg-white border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-100 transition mr-8"
            >
              Sign In
            </Button>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 shadow-lg space-y-4">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div key={item.name}>
                <p className="text-gray-800 font-semibold">{item.name}</p>
                <div className="pl-4 space-y-1">
                  {item.dropdown.map((opt) => (
                    <button
                      key={opt.name}
                      onClick={() => {
                        navigate(opt.href);
                        setMobileOpen(false);
                      }}
                      className="block text-gray-600 text-sm py-1 hover:text-[#1D2D5E]"
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.href);
                  setMobileOpen(false);
                }}
                className="block text-gray-800 text-base font-medium"
              >
                {item.name}
              </button>
            )
          )}

          {/* Mobile Auth */}
          <div className="pt-4 border-t mt-4">
            {!loading && user ? (
              <>
                <button
                  onClick={() => {
                    navigate("/wishlist");
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left text-gray-700 py-2"
                >
                  Wishlist
                </button>
                <button
                  onClick={() => {
                    navigate("/admin");
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left text-gray-700 py-2"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-red-600 py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  onSignInClick();
                  setMobileOpen(false);
                }}
                className="block w-full text-left text-[#1D2D5E] font-semibold py-2"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
