import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import OrderReview from "./component/OrderReview/OrderReview.jsx";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Grandpa from "./component/Grandpa/Grandpa";

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
            path: "/order",
            element: <OrderReview></OrderReview>,
            loader: () => fetch("tshirt.json"),
         },
         {
            path: "/about",
            element: <About></About>,
         },
         {
            path: "/contact",
            element: <Contact></Contact>,
         },
         {
            path: "/grandpa",
            element: <Grandpa></Grandpa>,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
