import { Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function DropdownCategories(props) {
  const { handleOnChange } = props;
  const [categoryData, setCategoryData] = useState([]);

  const getCategory = async () => {
    const categoryUrl = `${import.meta.env.VITE_APP_HOME_SERVICE_API}/category`;
    const { data } = await axios.get(categoryUrl);
    setCategoryData(data.data);
  };

  useEffect(() => {
    getCategory;
  }, []);

  return (
    <Select
      onChange={(e) => {
        handleOnChange(e);
      }}
      variant="outline"
      placeholder="เลือกหมวดหมู่"
      className="font-semibold text-center"
    >
      {categoryData.map((item) => {
        return (
          <option
            key={item.id}
            value={item.id}
            isDisabled={item.id === undefined}
          >
            บริการ{item.name}
          </option>
        );
      })}
    </Select>
  );
}

export default DropdownCategories;
