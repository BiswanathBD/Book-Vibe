import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../../../Components/Root/Root";
import ErrorPage from "../../../Components/ErrorPage/ErrorPage";
import Books from "../../../Components/Books/Books";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: ()=>fetch('./booksData.json'),
        Component: Books,
      },
    ],
  },
]);
