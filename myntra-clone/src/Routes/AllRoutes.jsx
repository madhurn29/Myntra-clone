
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Otp from "../Pages/Otp";
import Signup from "../Pages/Signup";
import Wishlist from "../Pages/Wishlist";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};

export default AllRoutes;



