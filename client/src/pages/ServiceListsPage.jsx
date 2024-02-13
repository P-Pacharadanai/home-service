import { NavUser, Footer } from "../components/common";
import { JobInformation } from "../components/landingPage";
import {
  WriteUp,
  ServiceLists,
  SearchTab,
} from "../components/serviceListPage";
import { useState } from "react";
import { useAuth } from "../contexts/authentication";

function ServiceListsPage() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3000);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  const { isAuthenticated } = useAuth();

  return (
    <div className="font-prompt">
      {isAuthenticated.status ? <NavUser /> : <GeneralNav />}
      <WriteUp />
      <SearchTab
        setMin={setMin}
        setMax={setMax}
        setKeyword={setKeyword}
        setCategory={setCategory}
        setSortBy={setSortBy}
      />
      <ServiceLists
        keyword={keyword}
        category={category}
        min={min}
        max={max}
        sortBy={sortBy}
      />
      <JobInformation />
      <Footer />
    </div>
  );
}

export default ServiceListsPage;
