import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
// import "antd/dist/reset.css";
import { Result, Button } from "antd";
import Layout from "./FixedComponent/Layout";
import GlobalStyle from "./FixedComponent/GlobalStyles";
import Home from "./Pages/Home";
import StorePage from "./Pages/StorePage";
import SingleProduct from "./Pages/SingleProduct";
import CartPage from "./Pages/CartPage";
import OrderConfirmation from "./Component/OrderConfirmation";
import WishlistPage from "./Pages/WishlistPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const StyledResult = styled(Result)`
  .ant-result-title {
    color: black !important;
  }
  .ant-result-subtitle {
    color: black !important;
  }
`;

// Component for handling invalid paths
const InvalidPath = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <StyledResult
      status="404"
      title="404 Not Found"
      subTitle="Oops! The page you are looking for does not exist."
      extra={
        <Button
          type="primary"
          onClick={handleBackHome}
          style={{ background: "black" }}
        >
          Back Home
        </Button>
      }
    />
  );
};

// Define your routes
const routes = [
  {
    element: (
      <>
        <Layout />
      </>
    ),
    children: [
      { index: true, path: "/", element: <Home /> },

      { path: "/storepage", element: <StorePage /> },
      { path: "/products/:productId", element: <SingleProduct /> },

      { path: "/cartpage", element: <CartPage /> },
      { path: "/order", element: <OrderConfirmation /> },
      { path: "/wishlist", element: <WishlistPage /> },
      { path: "/wishlist", element: <WishlistPage /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },

      { path: "*", element: <InvalidPath /> },

      // { path: "/admin/*", element: <ProtectedAdminDashboardPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => (
  <>
    {/* <PageUnderConstruction /> */}
    <GlobalStyle />

    <RouterProvider router={router} />
  </>
);

export default App;
