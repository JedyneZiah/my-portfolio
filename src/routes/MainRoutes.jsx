import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import HomeLayout from "../components/layouts/HomeLayout";
import LandingPage from "../pages/LandingPage";
import AboutPage from "../pages/AboutPage";
import ProjectPage from "../pages/ProjectPage";
import ContactPage from "../pages/ContactPage";

export const MainRoutes = createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
    ],
  },
]);
