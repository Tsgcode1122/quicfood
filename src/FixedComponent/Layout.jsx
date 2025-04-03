import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  const isStore = location.pathname.startsWith("/storepage");
  const isAll = location.pathname.startsWith("/allpost");
  const isStores = location.pathname === "/storepage";
  const isCart = location.pathname === "/cartpage";

  return (
    <>
      {!isStores && !isCart && <Navbar />}

      <Outlet />
      {!isCart && <Footer />}
    </>
  );
};

export default Layout;
