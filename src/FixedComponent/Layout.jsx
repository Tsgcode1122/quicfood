import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  const isStore = location.pathname.startsWith("/storepage");
  const isSingle = location.pathname.startsWith("/products");
  const isStores = location.pathname === "/storepage";
  const isCart = location.pathname === "/cartpage";
  const isWish = location.pathname === "/wishlist";

  return (
    <>
      {!isStores && !isWish && !isCart && !isSingle && <Navbar />}

      <Outlet />
      {!isCart && <Footer />}
    </>
  );
};

export default Layout;
