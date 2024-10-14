import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const AppRouter = () => {
  return (
    <Routes>
      {/* Home component includes the AboutSection */}
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
