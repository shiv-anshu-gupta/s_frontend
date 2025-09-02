import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./Context/UserContext";
import Loader from "./components/Loader"; // ✅ your custom Loader component

const AppLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Optional: Replace with real loading logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200); // 1.5 sec delay

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <App />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <AppLoader />
    </UserProvider>
  </StrictMode>
);
