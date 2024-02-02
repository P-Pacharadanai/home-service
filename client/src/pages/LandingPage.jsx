import { Home, Services, JobInformation } from "../components/landingPage";
import { Footer, NavAdmin, NavUser, GeneralNav } from "../components/common";

function LandingPage() {
  return (
    <>
      <main className="relative">
        <GeneralNav />
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
