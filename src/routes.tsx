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
import AccountingCodes from "./pages/AccountingCodes";

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
      { index: true, element: <Navigate to="projects" replace /> },
      { path: "dashboard", element: <DemoPage /> },
      { path: "projects", element: <DemoPage /> },
      { path: "timesheet", element: <DemoPage /> },
      { path: "purchase-order", element: <DemoPage /> },
      { path: "delivery-docket", element: <DemoPage /> },
      { path: "forms", element: <DemoPage /> },
      { path: "equipment", element: <DemoPage /> },
      { path: "resource-assigner", element: <DemoPage /> },
      { path: "file-manager", element: <DemoPage /> },
      { path: "user-management", element: <DemoPage /> },
      {
        path: "settings",
        element: <SettingsLayout />,
        children: [
          { path: "allowance", element: <DemoPage /> },
          { path: "categories", element: <DemoPage /> },
          { path: "accounting-codes", element: <AccountingCodes /> },
          { path: "resource-cost-sheet", element: <DemoPage /> },
          { path: "segments", element: <DemoPage /> },
          { path: "organization", element: <DemoPage /> },
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
