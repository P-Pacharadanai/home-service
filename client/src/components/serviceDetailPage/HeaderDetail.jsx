import ProgressBar from "./ProgressBar";
import { acCleaning } from "../../assets/images";

function HeaderDetail(props) {
  const { currentStep, serviceName, serviceImageUrl } = props;

  return (
    <div className="max-w-full h-60 relative ">
      <div className="h-full">
        <div className="w-full h-full bg-blue-900 opacity-40 absolute"></div>
        <img
          src={acCleaning}
          alt=""
          className="w-full h-full object-cover fill-blue-500"
        />
      </div>
      <div className="max-w-[1440px] px-28  relative left-2/4 -translate-x-2/4 bottom-14 z-10 ">
        <div className="w-fit h-16 px-8 flex justify-center items-center gap-x-3 bg-white absolute -top-28 z-10  border border-gray-300 rounded-lg">
          <span className="text-gray-700">บริการของเรา</span>
          <span className="text-gray-400">&gt;</span>
          <span className="text-3xl text-blue-600 h-fit font-medium">
            {serviceName}
          </span>
        </div>
        <ProgressBar currentStep={currentStep} />
      </div>
    </div>
  );
}

export default HeaderDetail;
