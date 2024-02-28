const AddPromotionNav = (props) => {
  return (
    <nav className="flex justify-between items-center w-full border-b p-4 bg-white font-prompt">
      <h2 className=" pl-[20px] text-xl font-medium text-gray-800">
        เพิ่ม Promotion Code
      </h2>
      <div className="flex gap-6 leading-none">
        <div className="w-full flex justify-end px-12 gap-4">
          <button
            className="bg-white text-blue-600 text-lg px-9 py-2 rounded-lg border-blue-600 border"
            onClick={props.onClickButtonCancel}
          >
            {props.buttonCancel}
          </button>
          <button
            className="bg-blue-600 text-white text-lg px-9 py-2 rounded-lg"
            onClick={props.handleCreatePromotion}
          >
            {props.buttonAdd}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AddPromotionNav;
