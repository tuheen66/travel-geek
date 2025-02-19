/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AuthProvider from "./providers/AuthProvider";
import ErrorPage from "./error-page";
import AddBlogs from "./Pages/AddBlogs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllBlogs from "./Pages/AllBlogs";
import PrivateRout from "./Components/PrivateRout";
import WishList from "./Pages/WishList";
import FeaturedBlogs from "./Pages/FeaturedBlogs";
import DetailBlog from "./Pages/DetailBlog";
import UpdateBlogs from "./Pages/UpdateBlogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addblogs",
        element: (
          <PrivateRout>
            <AddBlogs></AddBlogs>
          </PrivateRout>
        ),
      },
      {
        path: "/allblogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/featured",
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/wish-list",
        element: (
          <PrivateRout>
            <WishList></WishList>
          </PrivateRout>
        ),
      },
      {
        path: "/blog-details/:id",
        element: <DetailBlog></DetailBlog>,
        loader: ({ params }) =>
          fetch(
            `https://blog-website-server-ten.vercel.app/blogs/${params.id}`
          ),
      },
      {
        path: "/update-blog/:_id",
        element: (
          <PrivateRout>
            <UpdateBlogs></UpdateBlogs>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://blog-website-server-ten.vercel.app/blogs/${params._id}`
          ),
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
