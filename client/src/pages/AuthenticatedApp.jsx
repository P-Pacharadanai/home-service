import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/authentication";
import "../App.css";
import LandingPage from "./LandingPage";

function AuthenticatedApp() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      {isAuthenticated.role === "authenticated_admin" ? (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/service-list" element={<ServiceListsPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/service-list" element={<ServiceListsPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      )}
    </div>
  );
}

export default AuthenticatedApp;
