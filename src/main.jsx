import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { projectLoader, projectsLoader } from "./api/loader";
import "./fonts.css";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProjectsPage />,
        loader: projectsLoader,
      },
      {
        path: "/projects/:projectId",
        element: <ProjectPage />,
        errorElement: <ErrorPage />,
        loader: projectLoader,
        handle: {
          crumb: (data) => <span>{data.project.name}</span>,
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
