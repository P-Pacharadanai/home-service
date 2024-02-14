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

function SearchTab(props) {
  const [searchMin, setSearchMin] = useState(0);
  const [searchMax, setSearchMax] = useState(3000);
  const [searchWord, setSearchWord] = useState("");

  const { setMin, setMax, setKeyword, setCategory, setSortBy } = props;

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
      <section className="max-container h-[84px] flex flex-row justify-center items-center px-20">
        <div className="flex flex-row justify-center items-center">
          <Input
            onChange={handleKeywordChange}
            placeholder="ค้นหาบริการ"
          ></Input>
          <Button onClick={handleSearch} colorScheme="messenger">
            ค้นหา
          </Button>
        </div>

        <div className="w-[200px] h-[60px] ml-10 flex flex-col justify-around items-start border-r border-gray-300 ">
          <p className="text-xs">หมวดหมู่บริการ</p>
          <div className="w-[150px]">
            <Select
              onChange={handleCategoryChange}
              variant="unstyled"
              placeholder="บริการทั้งหมด"
              className="font-semibold"
            >
              <option value="ทั่วไป">บริการทั่วไป</option>
              <option value="ห้องครัว">บริการห้องครัว</option>
              <option value="ห้องน้ำ">บริการห้องน้ำ</option>
            </Select>
          </div>
        </div>

        <div className="w-[200px] h-[60px] flex flex-col justify-around items-center border-r border-gray-300 ">
          <p className="text-xs">ราคา</p>
          <Menu className="relative">
            <MenuButton as={Button}>
              {searchMin} - {searchMax}
            </MenuButton>
            <MenuList className="absolute top-full -left-[3.8rem] translate-x-1/2">
              <MenuItem>
                {""}
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

        <div className="w-[200px] ml-10 flex flex-col items-start justify-center">
          <p className="text-xs mb-3">เรียงตาม</p>
          <div className="w-[150px]">
            <Select
              onChange={handleSortByChange}
              variant="unstyled"
              placeholder="บริการแนะนำ"
              className="font-semibold"
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
