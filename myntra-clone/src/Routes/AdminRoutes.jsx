import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard";

import Store from "../AdminPages/Store";
import Settings from "../AdminPages/Settings";
import Analytics from "../AdminPages/Analytics";
import Favourites from "../AdminPages/Favourites";
function AdminRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/store" element={<Store />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default AdminRoutes;
