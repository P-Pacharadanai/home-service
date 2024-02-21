import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/authentication";
import "../App.css";
import LandingPage from "./LandingPage";
import ServiceDetailPage from "./ServiceDetailPage";
import CustomerServiceList from "./CustomerServiceList";
import CustomerServiceHistory from "./CustomerServiceHistory";
import ServiceListsPage from "./ServiceListsPage";
import PaymentSuccess from "./PaymentSuccess";
import AdminCategory from "./AdminCategory";
import AdminService from "./AdminService";
import AdminEditService from "./AdminEditService";
import EditPromotionCode from "../components/adminPromotion/EditPromotionCode";
import DetailPromotionCode from "../components/adminPromotion/DetailPromotionCode";

function AuthenticatedApp() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      {isAuthenticated.role === "authenticated_admin" ? (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/service-list" element={<ServiceListsPage />} />
          <Route path="*" element={<LandingPage />} />
          <Route path="/admin-category" element={<AdminCategory />} />
          <Route path="/admin-service" element={<AdminService />} />
          <Route path="/admin-edit-service" element={<AdminEditService />} />
          <Route path="/admin-promotion-detail" element={< DetailPromotionCode />} />
          <Route path="/admin-promotion-edit" element={<EditPromotionCode />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/service-list" element={<ServiceListsPage />} />
          <Route path="*" element={<LandingPage />} />
          <Route
            path="/service-detail/:serviceId"
            element={<ServiceDetailPage />}
          />
          <Route
            path="/customer-service-list"
            element={<CustomerServiceList />}
          />
          <Route path="/service-history" element={<CustomerServiceHistory />} />
          <Route
            path="/payment-success/:orderId"
            element={<PaymentSuccess />}
          />
        </Routes>
      )}
    </div>
  );
}

export default AuthenticatedApp;
