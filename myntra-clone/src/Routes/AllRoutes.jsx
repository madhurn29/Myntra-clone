import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Store from "../AdminPages/Store";
import Settings from "../AdminPages/Settings";
import Analytics from "../AdminPages/Analytics";
import Favourites from "../AdminPages/Favourites";
import Dashboard from "../Components/Dashboard";
import EditProducts from "../AdminPages/EditProducts";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/store" element={<Store />} />
      <Route path="/store/:id" element={<EditProducts />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AllRoutes;
