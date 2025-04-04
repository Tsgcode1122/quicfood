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
  const isOrder = location.pathname === "/order";

  return (
    <>
      {!isStores && !isWish && !isCart && !isSingle && !isOrder && <Navbar />}

      <Outlet />
      {<Footer />}
    </>
  );
};

export default Layout;
