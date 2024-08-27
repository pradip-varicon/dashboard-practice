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
import Dashboard from "./pages/Dashboard";

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
      { path: "dashboard", element: <Dashboard /> },
      { path: "projects", element: <Dashboard /> },
      { path: "timesheet", element: <Dashboard /> },
      { path: "purchase-order", element: <Dashboard /> },
      { path: "delivery-docket", element: <Dashboard /> },
      { path: "forms", element: <Dashboard /> },
      { path: "equipment", element: <Dashboard /> },
      { path: "resource-assigner", element: <Dashboard /> },
      { path: "file-manager", element: <Dashboard /> },
      { path: "user-management", element: <Dashboard /> },
      { path: "settings", element: <Dashboard /> },
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
