import { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import AppLayout from "../layout/AppLayout";
import SettingsLayout from "../layout/SettingsLayout";
import { AuthProvider } from "../context/AuthContext";
import { SuppliersProvider } from "../context/SuppliersContext";
import SuspenseWrapper from "../components/SuspenseWrapper";

const Suppliers = lazy(() => import("../pages/Suppliers"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const DemoPage = lazy(() => import("../pages/DemoPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      </AuthProvider>
    ),
    errorElement: (
      <SuspenseWrapper>
        <ErrorPage />
      </SuspenseWrapper>
    ),
    children: [
      { index: true, element: <Navigate to="suppliers" replace /> },
      {
        path: "overview",
        element: (
          <SuspenseWrapper>
            <DemoPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "sales-orders",
        element: (
          <SuspenseWrapper>
            <DemoPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "inventory",
        element: (
          <SuspenseWrapper>
            <DemoPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "suppliers",
        element: (
          <SuspenseWrapper>
            <SuppliersProvider>
              <Suppliers />
            </SuppliersProvider>
          </SuspenseWrapper>
        ),
      },
      {
        path: "purchase-orders",
        element: (
          <SuspenseWrapper>
            <DemoPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "deliveries",
        element: (
          <SuspenseWrapper>
            <DemoPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "customers",
        element: (
          <SuspenseWrapper>
            <DemoPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "invoices",
        element: (
          <SuspenseWrapper>
            <DemoPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "reports",
        element: (
          <SuspenseWrapper>
            <DemoPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "analytics",
        element: (
          <SuspenseWrapper>
            <DemoPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "settings",
        element: <SettingsLayout />,
        children: [
          {
            path: "product-categories",
            element: (
              <SuspenseWrapper>
                <DemoPage />
              </SuspenseWrapper>
            ),
          },
          {
            path: "user-roles",
            element: (
              <SuspenseWrapper>
                <DemoPage />
              </SuspenseWrapper>
            ),
          },
          {
            path: "tax-settings",
            element: (
              <SuspenseWrapper>
                <DemoPage />
              </SuspenseWrapper>
            ),
          },
          {
            path: "company-info",
            element: (
              <SuspenseWrapper>
                <DemoPage />
              </SuspenseWrapper>
            ),
          },
          {
            path: "billing-invoices",
            element: (
              <SuspenseWrapper>
                <DemoPage />
              </SuspenseWrapper>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: (
      <SuspenseWrapper>
        <ErrorPage />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    ),
    errorElement: (
      <SuspenseWrapper>
        <ErrorPage />
      </SuspenseWrapper>
    ),
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
