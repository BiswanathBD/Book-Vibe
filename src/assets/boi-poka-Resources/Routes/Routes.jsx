import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../../../Components/Root/Root";
import ErrorPage from "../../../Components/ErrorPage/ErrorPage";
import Books from "../../../Components/Books/Books";
import BookDetails from "../../../Components/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        Component: Books,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
