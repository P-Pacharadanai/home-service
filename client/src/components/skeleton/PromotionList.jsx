import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PromotionListSkeleton({ itemCount }) {
  return Array(itemCount)
    .fill(0)
    .map((_, index) => {
      return (
        <tr key={index} className="border-b relative bg-white">
          <td className="w-[56px] py-2 px-4">
            <Skeleton height={24} width={24} />
          </td>
          <td className="w-[80px] py-8 px-6 text-center">
            <Skeleton height={16} width={16} />
          </td>
          <td className="w-[262px] py-8 px-6">
            <Skeleton height={16} width={120} />
          </td>
          <td className="w-[245px] py-8 px-6">
            <Skeleton height={16} width={120} />
          </td>
          <td className="w-[357px] py-8 px-6">
            <Skeleton height={16} width={120} />
          </td>
          <td className="w-[120px] py-8 px-6 text-center">
            <div className="flex flex-row items-center justify-center gap-7">
              <Skeleton height={20} width={20} />
              <Skeleton height={20} width={20} />
            </div>
          </td>
        </tr>
      );
    });
}

export default PromotionListSkeleton;
