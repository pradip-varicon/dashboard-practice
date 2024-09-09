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
import createSuspenseRoute from "./RouteWithSuspense";

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
    errorElement: createSuspenseRoute("*", <ErrorPage />).element,
    children: [
      { index: true, element: <Navigate to="suppliers" replace /> },
      createSuspenseRoute("overview", <DemoPage />),
      createSuspenseRoute("sales-orders", <DemoPage />),
      createSuspenseRoute("inventory", <DemoPage />),
      {
        path: "suppliers",
        element: (
          <SuppliersProvider>
            {createSuspenseRoute("suppliers", <Suppliers />).element}
          </SuppliersProvider>
        ),
      },
      createSuspenseRoute("purchase-orders", <DemoPage />),
      createSuspenseRoute("deliveries", <DemoPage />),
      createSuspenseRoute("customers", <DemoPage />),
      createSuspenseRoute("invoices", <DemoPage />),
      createSuspenseRoute("reports", <DemoPage />),
      createSuspenseRoute("analytics", <DemoPage />),
      {
        path: "settings",
        element: <SettingsLayout />,
        children: [
          createSuspenseRoute("product-categories", <DemoPage />),
          createSuspenseRoute("user-roles", <DemoPage />),
          createSuspenseRoute("tax-settings", <DemoPage />),
          createSuspenseRoute("company-info", <DemoPage />),
          createSuspenseRoute("billing-invoices", <DemoPage />),
        ],
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthProvider>
        {createSuspenseRoute("/login", <LoginPage />).element}
      </AuthProvider>
    ),
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
