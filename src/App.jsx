import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Layouts/Home/Home.jsx";
import Lists from "./Layouts/Listing/Lists.jsx";
import SingleProperty from "./Layouts/SingleProperty/singleProperty.jsx";
import PropertyDetailPage from "./Pages/PropertyDetailPage.jsx";
import Admin from "./Layouts/Admin/Admin.jsx";
import AddProperty from "./Pages/AddProperty.jsx";
import AuthForm from "./components/AuthForm.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import MyProperties from "./Pages/Dashboard/MyProperties.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import BuyListingPage from "./Layouts/Listing/BuyListingPage.jsx";
import RentListingPage from "./Layouts/Listing/RentListingPage.jsx";
import OfficeListingPage from "./Layouts/Listing/OfficeListingPage.jsx";
import AgriculturalListingPage from "./Layouts/Listing/AgriculturalListingPage.jsx";
import PlotListingPage from "./Layouts/Listing/PlotListingPage.jsx";
import NewProjectListingPage from "./Layouts/Listing/NewProjectListingPage.jsx";
import Loan from "./Pages/Loan.jsx";
import WishlistPage from "./Pages/WishListPage.jsx";
import Dashboard from "./Pages/Dashboard/Home.jsx";
import Users from "./Pages/Dashboard/Users.jsx";
import SecretLogin from "./components/SecretLogin.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/secret" element={<SecretLogin />} />
        <Route path="/" element={<Home />}>
          <Route path="login" element={<AuthForm />} />
        </Route>
        <Route path="/list" element={<Lists />} />
        <Route path="/list/:id" element={<SingleProperty />}>
          <Route index element={<PropertyDetailPage />} />
        </Route>
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/properties/buy" element={<BuyListingPage />} />
        <Route path="/properties/rent" element={<RentListingPage />} />
        <Route path="/properties/office" element={<OfficeListingPage />} />
        <Route
          path="/properties/agricultural"
          element={<AgriculturalListingPage />}
        />
        <Route path="/properties/plots" element={<PlotListingPage />} />
        <Route path="/properties/farmhouse" element={<PlotListingPage />} />
        <Route
          path="/properties/new-projects"
          element={<NewProjectListingPage />}
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin", "seller"]}>
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route index element={<AddProperty />} />
          <Route path="users" element={<Users />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="properties" element={<MyProperties />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
