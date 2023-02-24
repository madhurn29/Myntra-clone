import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Store from "../AdminPages/Store";
import Settings from "../AdminPages/Settings";
import Favourites from "../AdminPages/Favourites";
import Dashboard from "../Components/Dashboard";
import EditProducts from "../AdminPages/EditProducts";
import Otp from "../Pages/Otp";
import Signup from "../Pages/Signup";
import Wishlist from "../Pages/Wishlist";
import AddProducts from "../AdminPages/AddProducts";
import MensJeans from '../Pages/MensJeans';
import {Cart} from '../Pages/CartPages/Cart'






const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mens-jeans" element={<MensJeans />} />
      < Route path="/dashboard" element={< Dashboard />} />
      < Route path="/store" element={< Store />} />
      < Route path="/store/:id" element={< EditProducts />} />
      < Route path="/addproducts" element={< AddProducts />} />
      < Route path="/favourites" element={< Favourites />} />
      < Route path="/settings" element={< Settings />} />
      < Route path="/signup" element={< Signup />} />
      < Route path="/otp" element={< Otp />} />
      < Route path="/wishlist" element={< Wishlist />} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes >
  );
};

export default AllRoutes;
