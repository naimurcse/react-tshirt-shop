import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import OrderReview from "./component/OrderReview/OrderReview.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
      children: [
         {
            path: "/",
            element: <OrderReview></OrderReview>,
            loader: () => fetch("tshirt.json"),
         },
         {
            path: "/",
            element: <h1>Hello</h1>,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
