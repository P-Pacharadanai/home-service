import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function HeaderDetail(props) {
  const { currentStep, serviceName, serviceImageUrl } = props;

  return (
    <div className="max-w-full h-60 relative ">
      <div className="h-full">
        <div className="w-full h-full bg-blue-900 opacity-40 absolute"></div>
        <img
          src={serviceImageUrl}
          alt=""
          className="w-full h-full object-cover fill-blue-500"
        />
      </div>
      <div className="max-w-[1440px] px-28  relative left-2/4 -translate-x-2/4 bottom-14 z-10 ">
        {serviceName ? (
          <div className="w-fit h-16 px-8 flex justify-center items-center gap-x-3 bg-white absolute -top-28 z-10  border border-gray-300 rounded-lg">
            <Link to="/service-list" className="text-gray-700">
              บริการของเรา
            </Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-3xl text-blue-600 h-fit font-medium">
              {serviceName}
            </span>
          </div>
        ) : (
          <div className="w-fit h-16 px-8 flex justify-center items-center gap-x-3 bg-white absolute -top-28 z-10  border border-gray-300 rounded-lg">
            <Skeleton width={200} height={30} />
          </div>
        )}
        <ProgressBar currentStep={currentStep} />
      </div>
    </div>
  );
}

export default HeaderDetail;
