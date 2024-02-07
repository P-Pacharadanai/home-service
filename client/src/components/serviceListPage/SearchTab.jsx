import {
  Input,
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { GeneralBtn } from "../../components/common";

function SearchTab() {
  return (
    <section className="max-container h-[84px] flex flex-row justify-center items-center px-20">
      <div className="flex flex-row justify-center items-center">
        <Input placeholder="Basic usage"></Input>
      </div>
      <div className="w-[200px] h-[40px] ml-10 flex flex-col justify-around items-start border-r border-gray-300 ">
        <p>หมวดหมู่บริการ</p>
        <div className="w-[150px]">
          <Select variant="unstyled" placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>
      </div>
      <div className="w-[300px] h-[40px] flex flex-col justify-around items-center border-r border-gray-300 ">
        <p>ราคา</p>
        <div className="w-[200px] h-[20px] flex items-center">
          <RangeSlider
            onChange={() => {}}
            aria-label={["min", "max"]}
            defaultValue={[0, 2000]}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </div>
      </div>
      <div className="w-[200px] h-[83px] ml-10 flex flex-col items-start justify-center">
        <p>เรียงตาม</p>
        <div className="w-[150px]">
          <Select variant="unstyled" placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
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
