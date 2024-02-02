import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/authentication";
import "../App.css";

function AuthenticatedApp() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      {isAuthenticated.role === "authenticated_admin" ? (
        <Routes></Routes>
      ) : (
        <Routes></Routes>
      )}
    </div>
  );
}

export default AuthenticatedApp;
