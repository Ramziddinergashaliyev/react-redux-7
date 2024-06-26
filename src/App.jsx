import React from "react";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/pages/admin/Admin";
import CreateProduct from "./components/pages/admin/create/CreateProduct";
import ManageProduct from "./components/pages/admin/manage/ManageProduct";
import Home from "./components/pages/home/Home";
import Wishlist from "./components/pages/wishlist/Wishlist";
import Single from "./components/pages/single/Single";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<Single />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="create" element={<CreateProduct />} />
          <Route path="manage" element={<ManageProduct />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
