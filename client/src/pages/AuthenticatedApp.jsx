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
import {
  PromotionCode,
  DetailPromotionCode,
  CodePromoNav,
} from "../components/adminPromotion/";

import AdminCategoryCreate from "./AdminCategoryCreate";
import AdminCategoryDetail from "./AdminCategoryDetail";
import AdminCategoryEdit from "./AdminCategoryEdit";
import AdminAddServicePage from "./AdminAddServicePage";
import AdminAddPromotion from "./AdminAddPromotion";
import AdminEditPromotion from "./AdminEditPromotion";
import AdminServiceDetail from "./AdminServiceDetail";

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
          <Route
            path="/admin-category/:categoryId"
            element={<AdminCategoryDetail />}
          />
          <Route
            path="/admin-category/create"
            element={<AdminCategoryCreate />}
          />
          <Route
            path="/admin-category/edit/:categoryId"
            element={<AdminCategoryEdit />}
          />
          <Route path="/admin-service" element={<AdminService />} />
          <Route
            path="/admin-service/edit/:serviceId"
            element={<AdminEditService />}
          />
          <Route
            path="/admin-service/:serviceId"
            element={<AdminServiceDetail />}
          />
          <Route
            path="/admin-promotion-details/:promotionId"
            element={<DetailPromotionCode />}
          />

          <Route path="/admin-promotion-add" element={<AdminAddPromotion />} />
          <Route
            path="/admin-promotion-edit/:promotionId"
            element={<AdminEditPromotion />}
          />
          <Route path="/admin-promotion" element={<PromotionCode />} />

          <Route path="/promotion-nav" element={<CodePromoNav />} />
          <Route path="/admin-add-service" element={<AdminAddServicePage />} />
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
