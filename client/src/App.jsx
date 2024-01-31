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
      <DraftRegisterPage></DraftRegisterPage>
    </>
  );
}

export default App;
