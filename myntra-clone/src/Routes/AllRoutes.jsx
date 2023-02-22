import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Pages/admin";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default AllRoutes;

