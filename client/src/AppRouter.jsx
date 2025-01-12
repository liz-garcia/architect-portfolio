import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// * Lazy loading
const Home = React.lazy(() => import("./pages/Home/Home.jsx"));
const Portfolio = React.lazy(() => import("./pages/Portfolio/Portfolio.jsx"));
const Project = React.lazy(() => import("./pages/Portfolio/Project.jsx"));

// * Admin pages
import Admin from "./pages/Admin/Admin.jsx";
import CreateUser from "./pages/Admin/CreateUser.jsx";

const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingSpinner height="h-[50vh]" width="w-full" />}>
      <Routes>
        {/* Home page includes the About page as AboutSection */}
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:projectId" element={<Project />} />

        {/* Admin routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/create-user" element={<CreateUser />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
