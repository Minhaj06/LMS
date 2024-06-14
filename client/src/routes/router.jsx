import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

import DashboardLayout from "../layouts/DashboardLayout";
import OverviewPage from "../pages/dashboard/OverviewPage";
import CoursesPage from "../pages/dashboard/courses/CoursesPage";
import PrivateRoute from "./PrivateRoute";
import CourseCreatePage from "../pages/dashboard/courses/CourseCreatePage";
import CourseUpdatePage from "../pages/dashboard/courses/CourseUpdatePage";
import PaymentPage from "../pages/dashboard/PaymentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
    errorElement: <h1>Not Found</h1>,
  },

  // Dashboard Routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <OverviewPage />,
      },
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "courses/:id",
        element: <CourseUpdatePage />,
      },
      {
        path: "course",
        element: <CourseCreatePage />,
      },
      {
        path: "payment/:id",
        element: <PaymentPage />,
      },
    ],
  },
]);

export default router;
