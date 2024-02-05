import { Home, Services, JobInformation } from "../components/landingPage";
import { Footer, NavUser, GeneralNav } from "../components/common";
import { useAuth } from "../contexts/authentication";
import ServiceList from "./ServiceListsPage";

function LandingPage() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <main className="relative">
        {isAuthenticated.status ? <NavUser /> : <GeneralNav />}

        <section className="xl:padding-r xl:padding-l wide:padding-r padding-b">
          <Home />
        </section>
        <section className="padding-x py-10 xl:padding-r">
          <Services />
        </section>
        <section className="padding py-10">
          <JobInformation />
        </section>
        <section className=" padding-x padding-t">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default LandingPage;
