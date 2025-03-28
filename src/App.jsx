import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import { Result, Button } from "antd";
import Layout from "./FixedComponent/Layout";
import GlobalStyle from "./FixedComponent/GlobalStyles";
import Home from "./Pages/Home";

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

      // { path: "/projects/:imageId", element: <SingleProjectDetails /> },
      // {
      //   path: "/services",
      //   element: <ServicePage />,
      //   key: "service",
      // },
      // { path: "/project", element: <ProjectPage /> },

      // { path: "/service", element: <ServicePage />, key: "service" },
      // { path: "/contact", element: <ContactForm /> },

      // { path: "/blog", element: <BlogPage /> },
      // { path: "/blog/:blogId", element: <ReadBlog /> },

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
