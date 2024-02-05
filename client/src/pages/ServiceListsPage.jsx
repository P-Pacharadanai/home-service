import { NavUser, Footer } from "../components/common";
import { JobInformation } from "../components/landingPage";
import {
  WriteUp,
  ServiceLists,
  SearchTab,
} from "../components/serviceListPage";

function ServiceListsPage() {
  return (
    <>
      <NavUser />
      <WriteUp />
      <SearchTab />
      <ServiceLists />
      <JobInformation />
      <Footer />
    </>
  );
}

export default ServiceListsPage;
