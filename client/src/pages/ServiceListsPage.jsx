import { NavUser, Footer } from "../components/common";
import { JobInformation } from "../components/landingPage";
import {
  Description,
  ServiceLists,
  SearchTab,
} from "../components/serviceListPage";

function ServiceListsPage() {
  return (
    <>
      <NavUser />
      <Description />
      <SearchTab />
      <ServiceLists />
      <JobInformation />
      <Footer />
    </>
  );
}

export default ServiceListsPage;
