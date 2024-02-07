import { NavUser, Footer } from "../components/common";
import { JobInformation } from "../components/landingPage";
import {
  WriteUp,
  ServiceLists,
  SearchTab,
} from "../components/serviceListPage";

function ServiceListsPage() {
  return (
    <div className="font-prompt">
      <NavUser />
      <WriteUp />
      <SearchTab />
      <ServiceLists />
      <JobInformation />
      <Footer />
    </div>
  );
}

export default ServiceListsPage;
