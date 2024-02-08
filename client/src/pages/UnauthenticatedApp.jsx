import { Routes, Route } from "react-router-dom";
import "../App.css";
import LandingPage from "./LandingPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import CustomerServiceList from "./CustomerServiceList";
import CustomerServiceHistory from "./CustomerServiceHistory";
import PaymentSuccess from "./PaymentSuccess";

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<LandingPage />} />
        <Route path="/service-history" element={<CustomerServiceHistory/>} />
        <Route path="/service-list" element={<CustomerServiceList/>} />
        <Route path="/payment-success" element={<PaymentSuccess/>} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
