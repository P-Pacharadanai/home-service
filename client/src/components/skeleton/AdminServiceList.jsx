import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function AdminServiceListSkeleton({ itemCount }) {
  return Array(itemCount)
    .fill(0)
    .map((_, index) => {
      return (
        <tr
          key={index}
          role="button"
          className="border-b relative bg-white cursor-pointer"
        >
          <td className="py-2 px-4 w-[56px]">
            <Skeleton width={24} height={24} />
          </td>
          <td className="py-8 px-6 text-center w-[58px]">
            <Skeleton width={40} height={16} />
          </td>
          <td className="py-8 px-6 w-[262px]">
            <Skeleton width={200} height={16} />
          </td>
          <td className="py-8 px-6 w-[225px]">
            <Skeleton width={160} height={16} />
          </td>
          <td className="py-8 px-6 w-[209px]">
            <Skeleton width={100} height={16} />
          </td>
          <td className="py-8 px-6 w-[226px]">
            <Skeleton width={120} height={16} />
          </td>
          <td className="py-8 px-6 text-center">
            <Skeleton circle={true} height={24} width={24} />
          </td>
        </tr>
      );
    });
}

export default AdminServiceListSkeleton;
