import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default AppRouter;
