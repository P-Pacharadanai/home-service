import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function AdminPromotionSkeleton({ itemCount }) {
  return Array(itemCount)
    .fill(0)
    .map((_, index) => {
      return (
        <div
          key={index}
          className="grid grid-cols-7 text-start items-center py-8 px-8 bg-white hover:bg-gray-50 font-prompt"
        >
          <div>
            <Skeleton width={100} height={20} />
          </div>
          <div>
            <Skeleton width={50} height={20} />
          </div>
          <div>
            <Skeleton width={80} height={20} />
          </div>
          <div>
            <Skeleton width={80} height={20} />
          </div>
          <div>
            <Skeleton width={120} height={20} />
          </div>
          <div className="ml-8 w-full">
            <Skeleton width={120} height={20} />
          </div>
          <div className="flex justify-center gap-6 ml-24">
            <button>
              <Skeleton circle={true} width={24} height={24} />
            </button>
            <button>
              <Skeleton width={24} height={24} />
            </button>
          </div>
        </div>
      );
    });
}

export default AdminPromotionSkeleton;
