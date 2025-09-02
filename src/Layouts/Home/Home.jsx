import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar.jsx";
import TopPage from "../../components/Home/topPage.jsx";
import Temp from "../../components/Home/temp.jsx";
import SecondPage from "../../components/Home/SecondPage.jsx";
import FourthPage from "../../components/Home/FourthPage.jsx";
import FifthPage from "../../components/Home/FifthPage.jsx";
import SixthPage from "../../components/Home/SixthPage.jsx";
import Footer from "../../components/Footer.jsx";
import AuthForm from "../../components/AuthForm.jsx";
import { useUser } from "../../Context/UserContext";

const HomeLayout = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useUser();

  const handleLoginOpen = () => setIsLoginOpen(true);
  const handleLoginClose = () => setIsLoginOpen(false);

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      const timer = setTimeout(() => {
        setIsLoginOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [user]);

  // Scroll effect to toggle navbar background and position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100); // Adjust scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-indigo-100 to-pink-100">
      {/* Navbar Header */}
      <header
        className={`w-full z-50 transition-all duration-1000 ease-in-out ${
          isScrolled
            ? "sticky top-0 bg-black/80 shadow-md backdrop-blur-md border-b border-gray-300"
            : "absolute top-0 bg-transparent border-none"
        }`}
      >
        <Navbar onSignInClick={handleLoginOpen} />
      </header>

      {/* Page Content */}
      <TopPage />
      <SecondPage />
      {/* <FourthPage /> */}
      <FifthPage />
      <SixthPage />
      <Temp />

      {/* Auth Modal */}
      <div
        className={`fixed inset-0 z-50 flex justify-end bg-black bg-opacity-40 transition-opacity duration-300 ${
          isLoginOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="bg-transparent rounded-lg shadow-lg relative">
          <button
            onClick={handleLoginClose}
            className="absolute top-2 right-3 text-gray-500 hover:text-red-500"
          >
            ✕
          </button>

          <AuthForm onClose={handleLoginClose} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
