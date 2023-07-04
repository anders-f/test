import { createBrowserRouter, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import CustomerPage from "./pages/CustomerPage";
import PageLayout from "./components/layout/PageLayout";
import CreatePriceLadderPage from "./pages/CreatePriceLadderPage";
import LoginCallbackPage from "./pages/LoginCallbackPage/";

export const router = createBrowserRouter([
  {
    path: "/",
    handle: {
      crumb: {
        name: "Home",
        url: "/",
      },
    },
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/customers",
        handle: {
          crumb: {
            name: "Customers",
            dynamicRoute: false,
          },
        },
        children: [
          { index: true, element: <Navigate to="/" /> },
          {
            path: "/customers/:id",
            handle: {
              crumb: {
                name: "Customer",
                dynamicRoute: true,
              },
            },
            children: [
              { index: true, element: <CustomerPage /> },
              {
                path: "create-price-ladder",
                element: <CreatePriceLadderPage />,
                handle: {
                  crumb: {
                    name: "Generate price ladder",
                    dynamicRoute: false,
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/login_callback",
    element: <LoginCallbackPage />,
    errorElement: <ErrorPage />,
  },
]);
