import { Home, Services, JobInformation } from "../components/landingPage";
import { Footer, NavUser, GeneralNav } from "../components/common";
import { useAuth } from "../contexts/authentication";

function LandingPage() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <main className="relative font-prompt">
        {isAuthenticated.status ? <NavUser /> : <GeneralNav />}

        <section className="xl:padding-r xl:padding-l wide:padding-r padding-b">
          <Home />
        </section>
        <section className="padding-x xl:padding-r">
          <Services />
        </section>
        <section className="padding ">
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
