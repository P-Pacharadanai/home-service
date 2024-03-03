import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CustomerServiceListSkeleton({ itemCount }) {
  return Array(itemCount)
    .fill(0)
    .map((_, index) => {
      return (
        <div
          key={index}
          className="p-6 rounded-lg border border-gray-300 bg-white"
        >
          <div className="flex justify-between mb-4">
            <h4 className="text-xl font-medium">
              <Skeleton width={150} height={16} />
            </h4>
            <div className="flex gap-2">
              <p className="text-gray-700">สถานะ:</p>
              <p className="bg-gray-200 rounded-full text-gray-950 leading-1 px-4 py-1 text-sm">
                <Skeleton width={80} height={16} />
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <ul>
              <li className="flex gap-3 mb-2">
                <p className="text-gray-700">
                  <Skeleton width={200} height={16} />
                </p>
              </li>
              <li className="flex gap-3 mb-4">
                <p className="text-gray-700">
                  <Skeleton width={200} height={16} />
                </p>
              </li>
            </ul>
            <div>
              <div className="flex items-center gap-4">
                <p className="text-gray-700">ราคารวม: </p>
                <p className="text-gray-950 text-lg font-medium">
                  <Skeleton width={80} height={16} />
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2 text-gray-700">
              <p className="text-[1rem]">ที่อยู่:</p>
              <p className="text-gray-950">
                <Skeleton width={200} height={16} />
              </p>
            </div>
            <div className="">
              <Skeleton width={120} height={40} />
            </div>
          </div>
        </div>
      );
    });
}

export default CustomerServiceListSkeleton;
