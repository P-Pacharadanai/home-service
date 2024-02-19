import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/authentication";
import "../App.css";
import LandingPage from "./LandingPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import ServiceListsPage from "./ServiceListsPage";
import LoadingPage from "./LoadingPage";

function UnauthenticatedApp() {
  const { isLoading } = useAuth();
  return (
    <div className="App">
      {isLoading ? (
        <Routes>
          <Route path="/" element={<LoadingPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/service-list" element={<ServiceListsPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      )}
    </div>
  );
}

export default UnauthenticatedApp;
