import "./App.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import DraftRegisterPage from "./pages/DraftRegister";

function App() {
  return (
    <>
      <DraftRegisterPage></DraftRegisterPage>
    </>
import { Home, Services, JobInformation } from "./components/landingPage";
import { NavUser, Footer } from "./components/common";
function App() {
  return (
    <main>
      <section className="padding bg-slate-50">
        <NavUser />
      </section>
     <section className="xl:padding-r xl:padding-l wide:padding-r padding-b">
      <Home />
     </section>
     <section className="padding">
      <Services />
     </section>
     <section className="padding">
      <JobInformation/>
    </section> 
     <section className="padding-x padding-t pb-8">
      <Footer />
     </section>
    </main>
  );
}

export default App;
