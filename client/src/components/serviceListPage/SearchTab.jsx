import {
  Button,
  Input,
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { GeneralBtn } from "../common";

function SearchTab(props) {
  const [searchMin, setSearchMin] = useState(0);
  const [searchMax, setSearchMax] = useState(3000);
  const [searchWord, setSearchWord] = useState("");

  const { setMin, setMax, setKeyword, setCategory, setSortBy, categoryData } =
    props;

  const handleSliderChange = (value) => {
    setSearchMin(value[0]);
    setSearchMax(value[1]);
  };

  const handleSliderChangeEnd = (value) => {
    setMin(value[0]);
    setMax(value[1]);
  };

  const handleKeywordChange = (event) => {
    setSearchWord(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSearch = () => {
    setMin(searchMin);
    setMax(searchMax);
    setKeyword(searchWord);
  };

  return (
    <>
      <section className="max-container h-[84px] flex flex-row justify-center items-center px-[100px]">
        <div className="flex flex-row mx-10 justify-center items-center gap-2">
          <Input
            onChange={handleKeywordChange}
            placeholder="ค้นหาบริการ"
          ></Input>
          <GeneralBtn label="ค้นหา" onClick={handleSearch} />
        </div>

        <div className="w-[200px] h-[60px] mx-5 px-8 flex flex-col justify-around items-center border-r border-gray-300 ">
          <p className="text-xs">หมวดหมู่บริการ</p>

          <Select
            onChange={handleCategoryChange}
            variant="unstyled"
            placeholder="บริการทั้งหมด"
            className="font-semibold text-center cursor-pointer "
            defaultValue={1}
          >
            {categoryData.map((item) => {
              return (
                <option
                  key={item.id}
                  value={item.id}
                  isdisabled={(item.id === undefined).toString()}
                >
                  บริการ{item.name}
                </option>
              );
            })}
          </Select>
        </div>

        <div className="w-[200px] h-[60px] mx-5 flex flex-col justify-around items-center border-r border-gray-300 ">
          <p className="text-xs">ราคา</p>
          <Menu className="relative">
            <MenuButton as={Button}>
              {searchMin} - {searchMax}
            </MenuButton>
            <MenuList className="absolute top-full -left-[3.8rem] translate-x-1/2">
              <MenuItem>
                <RangeSlider
                  aria-label={["min", "max"]}
                  defaultValue={[0, 3000]}
                  min={0}
                  max={3000}
                  step={10}
                  onChange={(val) => handleSliderChange(val)}
                  onChangeEnd={(val) => handleSliderChangeEnd(val)}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb boxSize={10} index={0}>
                    {searchMin}
                  </RangeSliderThumb>
                  <RangeSliderThumb boxSize={10} index={1}>
                    {searchMax}
                  </RangeSliderThumb>
                </RangeSlider>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

        <div className="w-[200px] flex flex-col mx-5 items-center justify-center">
          <p className="text-xs mb-3">เรียงตาม</p>
          <div className="w-[150px]">
            <Select
              onChange={handleSortByChange}
              variant="unstyled"
              placeholder="บริการแนะนำ"
              className="font-semibold text-center cursor-pointer"
            >
              <option value="ASC">ราคา น้อย-มาก</option>
              <option value="DESC">ราคา มาก-น้อย</option>
              {/* <option value="popular">บริการยอดนิยม</option> */}
            </Select>
          </div>
        </div>
        <div className="flex items-center justify-end"></div>
      </section>
    </>
  );
}

export default SearchTab;
