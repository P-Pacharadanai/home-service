import "./App.css";
import { useAuth } from "./contexts/authentication.jsx";
import AuthenticatedApp from "./pages/AuthenticatedApp.jsx";
import UnauthenticatedApp from "./pages/UnauthenticatedApp.jsx";

function App() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated.status ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
