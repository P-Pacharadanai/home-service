import { NavUser, Footer, GeneralNav } from "../components/common";
import {
  WriteUp,
  ServiceLists,
  SearchTab,
  ServiceDescription,
} from "../components/serviceListPage";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/authentication";
import axios from "axios";

function ServiceListsPage() {
  const { isAuthenticated } = useAuth();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3000);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [categoryData, setCategoryData] = useState([]);

  const getCategory = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/category`
    );
    setCategoryData(data.data);
  };

  console.log(categoryData);

  useEffect(() => {
    getCategory();
  }, []);
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
        categoryData={categoryData}
      />
      <ServiceLists
        keyword={keyword}
        category={category}
        min={min}
        max={max}
        sortBy={sortBy}
      />
      <ServiceDescription />
      <Footer />
    </div>
  );
}

export default ServiceListsPage;
