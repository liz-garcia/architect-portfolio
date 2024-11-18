import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// * Lazy loading
const Home = React.lazy(() => import("./pages/Home/Home.jsx"));
const Projects = React.lazy(() => import("./pages/Portfolio/Projects.jsx"));

// * Admin pages
import Admin from "./pages/Admin/Admin.jsx";
import CreateUser from "./pages/Admin/CreateUser.jsx";

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-[90vh] w-[100vw] place-content-center">
          <div className="mx-auto my-auto">
            <svg
              className="h-12 w-12 animate-spin text-zinc-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          </div>
        </div>
      }
    >
      <Routes>
        {/* Home page includes the About page as AboutSection */}
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/projects" element={<Projects />} />

        {/* Admin routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/create-user" element={<CreateUser />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
