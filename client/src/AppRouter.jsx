import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// * Admin pages
import Admin from "./pages/Admin/Admin.jsx";
import CreateUser from "./pages/Admin/CreateUser.jsx";

const AppRouter = () => {
  return (
    <Routes>
      {/* Home page includes the About page as AboutSection */}
      <Route path="/" element={<Home />} />

      {/* Admin routes */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/create-user" element={<CreateUser />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
