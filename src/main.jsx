import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Laptops from "./components/Laptops/Laptops";
import Phones from "./components/Phones/Phones";
import SmartWatches from "./components/SmartWatches/SmartWatches";
import Accessories from "./components/Accessories/Accessories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/products.json"),
        children: [
          {
            path: "laptops",
            element: <Laptops></Laptops>,
          },
          {
            path: "phones",
            element: <Phones></Phones>,
          },
          {
            path: "smartwatches",
            element: <SmartWatches></SmartWatches>,
          },
          {
            path: "accessories",
            element: <Accessories></Accessories>,
          },
        ],
      },
      {
        path: "product/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
