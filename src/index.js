import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./components/Home";
import Error from "./components/Error";
import Child from "./components/Child";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calculator from "./components/Calculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Calculator />,
      },
      {
        path: "child",
        element: <Child />,
      },
    ],
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
  {
    path: "/calc",
    element: <Calculator />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
