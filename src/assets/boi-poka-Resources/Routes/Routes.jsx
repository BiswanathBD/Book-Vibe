import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../../../Components/Root/Root';
import ErrorPage from '../../../Components/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>
  },
]);