import { ChevronLeft } from "lucide-react";

const EditPromotionNav = (props) => {
  return (
    <nav className="flex items-center w-full border-b p-4 bg-white font-prompt">
      <div>
        <ChevronLeft
          className="w-12 h-12 text-gray-600 cursor-pointer ml-5"
          onClick={() => console.log("Back")}
        />
      </div>
      <div className="font-prompt flex flex-col items-center text-gray-700 text-start w-[200px]">
        <p className="text-xs flex pr-6 ">Promotion Code</p>
        <h2 className="text-2xl font-medium tracking-wide text-gray-950 leading-8">
          HOME202
        </h2>
      </div>
      <div className="w-full flex justify-end px-12 gap-4 ">
        <button
          className="bg-white text-blue-600 text-lg px-9 py-2 rounded-lg border-blue-600 border"
          onClick={props.onClickButtonCancel}
        >
          {props.buttonCancel}
        </button>
        <button
          className="bg-blue-600 text-white text-lg px-9 py-2 rounded-lg"
          onClick={props.handleEditPromotion}
        >
          {props.buttonAdd}
        </button>
      </div>
    </nav>
  );
};

export default EditPromotionNav;
