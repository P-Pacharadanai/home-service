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
  Flex,
} from "@chakra-ui/react";
import { GeneralBtn } from "../../components/common";
import { useState } from "react";

function SearchTab() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  const handleSliderChange = (value) => {
    setMin(value[0]);
    setMax(value[1]);
    console.log(min, max);
  };
  return (
    <section className="max-container h-[84px] flex flex-row justify-center items-center px-20">
      <div className="flex flex-row justify-center items-center">
        <Input placeholder="ค้นหาบริการ"></Input>
      </div>

      <div className="w-[200px] h-[60px] ml-10 flex flex-col justify-around items-start border-r border-gray-300 ">
        <p>หมวดหมู่บริการ</p>
        <div className="w-[150px]">
          <Select variant="unstyled" placeholder="บริการทั้งหมด">
            {/* <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option> */}
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
              {" "}
              <RangeSlider
                aria-label={["min", "max"]}
                defaultValue={[0, 1000]}
                min={0}
                max={2000}
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
          <Select variant="unstyled" placeholder="ราคา น้อย-มาก">
            <option value="option1">ราคา มาก-น้อย</option>
            <option value="option2">บริการยอดนิยม</option>
          </Select>
        </div>
      </div>
      <div className="w-[200px] h-[83px] flex items-center justify-center">
        <GeneralBtn label="ค้นหา"></GeneralBtn>
      </div>
    </section>
  );
}

export default SearchTab;
