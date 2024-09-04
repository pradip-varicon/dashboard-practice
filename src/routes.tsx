import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import AppLayout from "./layout/AppLayout";
import DemoPage from "./pages/DemoPage";
import SettingsLayout from "./layout/SettingsLayout";
import Suppliers from "./pages/Suppliers";
import { SuppliersProvider } from "./context/SuppliersContext";

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
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="suppliers" replace /> },
      { path: "overview", element: <DemoPage /> },
      { path: "sales-orders", element: <DemoPage /> },
      { path: "inventory", element: <DemoPage /> },
      {
        path: "suppliers",
        element: (
          <SuppliersProvider>
            <Suppliers />
          </SuppliersProvider>
        ),
      },
      { path: "purchase-orders", element: <DemoPage /> },
      { path: "deliveries", element: <DemoPage /> },
      { path: "customers", element: <DemoPage /> },
      { path: "invoices", element: <DemoPage /> },
      { path: "reports", element: <DemoPage /> },
      { path: "analytics", element: <DemoPage /> },
      {
        path: "settings",
        element: <SettingsLayout />,
        children: [
          { path: "product-categories", element: <DemoPage /> },
          { path: "user-roles", element: <DemoPage /> },
          { path: "tax-settings", element: <DemoPage /> },
          { path: "company-info", element: <DemoPage /> },
          { path: "billing-invoices", element: <DemoPage /> },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
