import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ServiceCardSkeleton({ itemCount, marginTop }) {
  return Array(itemCount)
    .fill(0)
    .map((_, index) => {
      return (
        <div
          key={index}
          className={`relative flex-1 sm:w-[340px] sm:max-w-[350px] w-full rounded-[8px] border-2 border-gray-300 pb-4 bg-white font-prompt ${marginTop}`}
        >
          <div className="justify-center items-centerd">
            <div className="relative -top-1">
              <Skeleton height={180} />
            </div>
            <p className="text-md text-blue-800 px-2.5 pt-2.5 pb-2 rounded-xl leading-none ">
              <Skeleton width={85} height={35} />
            </p>
            <h3 className="text-xl leading-normal font-semibold pl-2.5 text-gray-950">
              <Skeleton width={150} height={25} />
            </h3>
            <div className="flex items-start gap-2.5 pl-2.5 mt-1">
              <Skeleton width={80} />
            </div>
            <div className="text-blue-600 font-semibold leading-6 underline  mb-2 pl-2.5">
              <Skeleton width={100} />
            </div>
          </div>
        </div>
      );
    });
}

export default ServiceCardSkeleton;
