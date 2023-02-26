import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Store from "../AdminPages/Store";
import Settings from "../AdminPages/Settings";
import Favourites from "../AdminPages/Favourites";
import EditProducts from "../AdminPages/EditProducts";
import Otp from "../Pages/Otp";
import Signup from "../Pages/Signup";
import Wishlist from "../Pages/Wishlist";
import AddProducts from "../AdminPages/AddProducts";
import MensJeans from "../Pages/MensJeans";
import { Cart } from "../Pages/CartPages/Cart";
import Dashboard from "../AdminPages/Dashboard";
import MensTshirt from "../Pages/MensTshirt";
import WomensKurta from "../Pages/WomensKurta";
import WomensTop from "../Pages/WomensTop";
import ProductDetail from "../Pages/ProductDetail";
import { Address } from '../Pages/CartPages/Address'
import { OrderConfirmPage } from "../Pages/CartPages/OrderConfirmPage";
import { PaymentPage } from "../Pages/CartPages/PaymentPage";
import SignupForm from "../Pages/SignupForm";
import PrivateRoute from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mens-jeans" element={<MensJeans />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/store" element={<Store />} />
      <Route path="/store/:id" element={<EditProducts />} />
      <Route path="/addproducts" element={<AddProducts />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={
        <PrivateRoute>
          <Cart />
        </PrivateRoute>} />
      <Route path="/mens-tshirts" element={<MensTshirt />} />
      <Route path="/womens-kurta" element={<WomensKurta />} />
      <Route path="/womens-top" element={<WomensTop />} />
      < Route path="/single-products/:id" element={< ProductDetail />} />
      < Route path="/store/:id" element={< EditProducts />} />
      <Route path='/address' element={
        <PrivateRoute>
          <Address />
        </PrivateRoute>} />
      <Route path="/payment" element={
        <PrivateRoute>
          <PaymentPage />
        </PrivateRoute>} />
      <Route path="/orderSuccess" element={
        <PrivateRoute>
          <OrderConfirmPage />
        </PrivateRoute>} />
        
      <Route path='/signupform' element={<SignupForm />} />
    </Routes >

  );
};

export default AllRoutes;
