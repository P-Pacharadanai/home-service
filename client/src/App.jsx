import { Home, Services, JobInformation } from "./components/landingPage";
import { Footer, NavAdmin, NavUser, GeneralNav } from "./components/common";

<<<<<<< HEAD
const App = () => (
  <main className="relative">
    <NavUser />

    <section className="xl:padding-r xl:padding-l wide:padding-r padding-b">
      <Home />
    </section>

    <section className="padding-x py-10">
      <Services />
    </section>

    <section className="padding py-10">
      <JobInformation />
    </section>

    <section className=" padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);
=======
function App() {
  return (
    <>
      <DraftRegisterPage></DraftRegisterPage>
    </>
  );
}
>>>>>>> 08bbfbe (feat:add user api)

export default App;
