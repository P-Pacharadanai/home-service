import { Routes, Route } from "react-router-dom";
import "../App.css";
import LandingPage from "./LandingPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import ServiceListsPage from "./ServiceListsPage";

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/service-list" element={<ServiceListsPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
