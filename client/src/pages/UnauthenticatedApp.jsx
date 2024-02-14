import { Routes, Route } from "react-router-dom";
import "../App.css";
import LandingPage from "./LandingPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import AdminCategory from "./AdminCategory";
function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin-category" element={<AdminCategory />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
