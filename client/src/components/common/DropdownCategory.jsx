import { Select } from "@chakra-ui/react";

function DropdownCategories() {
  const [categoryId, setCategoryId] = useState();
  const [categoryData, setCategoryData] = useState([]);

  const getCategory = async () => {
    const categoryUrl = `${import.meta.env.VITE_APP_HOME_SERVICE_API}/category`;
    const { data } = await axios.get(categoryUrl);
    setCategoryData(data.data);
  };

  const handleCategoryChange = (e) => {
    setCategoryId(e.target.value);
  };

  return (
    <Select
      onChange={handleCategoryChange}
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
