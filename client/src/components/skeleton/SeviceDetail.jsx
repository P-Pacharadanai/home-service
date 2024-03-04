import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ServiceDetailSkeleton({ itemCount }) {
  return Array(itemCount)
    .fill(0)
    .map((_, index) => {
      return (
        <div key={index}>
          <div className="flex justify-between">
            <div>
              <h4 className="text-lg font-medium">
                <Skeleton width={200} />
              </h4>
              <div className="flex gap-3 mt-2">
                <p className="text-sm text-gray-700">
                  <Skeleton width={150} />
                </p>
              </div>
            </div>
            <div className="basis-36 flex justify-between items-center gap-5">
              <Skeleton width={40} height={40} />
              <p className="text-gray-800 font-medium">
                <Skeleton width={30} />
              </p>
              <Skeleton width={40} height={40} />
            </div>
          </div>
          {index !== itemCount - 1 && (
            <hr className="my-6 border-1 border-gray-300" />
          )}
        </div>
      );
    });
}

export default ServiceDetailSkeleton;
