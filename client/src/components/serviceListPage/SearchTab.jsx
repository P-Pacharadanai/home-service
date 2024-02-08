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
import { GeneralBtn } from "../../components/common";
import { useState } from "react";

function SearchTab(props) {
  const {
    min,
    setMin,
    max,
    setMax,
    keyword,
    setKeyword,
    category,
    setCategory,
    sortBy,
    setSortBy,
  } = props;

  const handleSliderChange = (value) => {
    setMin(value[0]);
    setMax(value[1]);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    console.log(category);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSearch = () => {};

  return (
    <>
      <section className="max-container h-[84px] flex flex-row justify-center items-center px-20">
        <div className="flex flex-row justify-center items-center">
          <Input
            onChange={handleKeywordChange}
            placeholder="ค้นหาบริการ"
          ></Input>
        </div>

        <div className="w-[200px] h-[60px] ml-10 flex flex-col justify-around items-start border-r border-gray-300 ">
          <p>หมวดหมู่บริการ</p>
          <div className="w-[150px]">
            <Select
              onChange={handleCategoryChange}
              variant="unstyled"
              placeholder="บริการทั้งหมด"
            >
              <option value="ทั่วไป">บริการทั่วไป</option>
              <option value="ห้องครัว">บริการห้องครัว</option>
              <option value="ห้องน้ำ">บริการห้องน้ำ</option>
            </Select>
          </div>
        </div>

        <div className="w-[300px] h-[60px] flex flex-col justify-around items-center border-r border-gray-300 ">
          <p>ราคา</p>
          <Menu className="relative">
            <MenuButton as={Button}>
              {min} - {max}
            </MenuButton>
            <MenuList className="absolute top-full -left-[3.8rem] translate-x-1/2">
              <MenuItem>
                {""}
                <RangeSlider
                  aria-label={["min", "max"]}
                  defaultValue={[0, 2000]}
                  min={0}
                  max={2000}
                  step={10}
                  onChange={(val) => handleSliderChange(val)}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb boxSize={10} index={0}>
                    {min}
                  </RangeSliderThumb>
                  <RangeSliderThumb boxSize={10} index={1}>
                    {max}
                  </RangeSliderThumb>
                </RangeSlider>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

        <div className="w-[200px] h-[83px] ml-10 flex flex-col items-start justify-center">
          <p>เรียงตาม</p>
          <div className="w-[150px]">
            <Select
              onChange={handleSortByChange}
              variant="unstyled"
              placeholder="-"
            >
              <option value="ASC">ราคา น้อย-มาก</option>
              <option value="DESC">ราคา มาก-น้อย</option>
              {/* <option value="popular">บริการยอดนิยม</option> */}
            </Select>
          </div>
        </div>
        <div className="w-[200px] h-[83px] flex items-center justify-center">
          <GeneralBtn onclick={handleSearch} label="ค้นหา"></GeneralBtn>
        </div>
      </section>
    </>
  );
}

export default SearchTab;
