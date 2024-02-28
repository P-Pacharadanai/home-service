import { Magnifying } from "../../assets/icons/index";
import { useState } from "react";

const TopbarSearch = (props) => {
  const { inputKeyword, setInputKeyword } = props;
  const onAddClick = props.onAddClick;
  console.log(props);
  const handleKeywordChange = (event) => {
    setInputKeyword(event.target.value);
  };

  return (
    <div className="font-prompt flex flex-row items-center justify-between h-[80px] p-10 bg-white">
      <div className="font-medium text-xl">{props.title}</div>
      <div id="right-content" className="flex-1 flex flex-row justify-end">
        {props.searchText && (
          <div className="relative basis-[350px] ">
            <img
              src={Magnifying}
              alt="magnifying glass icon"
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <input
              type="text"
              placeholder={props.searchText}
              className="w-full text-[1rem] focus:outline-none border border-gray-400 p-2 pl-10 rounded-lg "
              onChange={handleKeywordChange}
              value={inputKeyword}
            />
          </div>
        )}

        {props.buttonCancel && (
          <button
            onClick={props.onClickButtonCancel}
            className="min-w-28 text-[1rem] text-blue-600 border border-blue-600 rounded-lg px-6 py-2 ml-6"
          >
            {props.buttonCancel}
          </button>
        )}
        <button
          onClick={onAddClick}
          className="min-w-28 bg-blue-600 text-[1rem] text-white rounded-lg px-6 py-2 ml-6"
        >
          {props.buttonAdd}
        </button>
      </div>
    </div>
  );
};

export default TopbarSearch;
