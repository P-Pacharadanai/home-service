import { convertThaiDateTime } from "../common";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MainContent(props) {
  const { categoryData } = props;

  return (
    <div className="flex flex-col gap-6 w-full bg-white border border-gray-200 rounded-lg py-10 px-6">
      <div className="flex items-center">
        <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
          ชื่อหมวดหมู่
        </p>
        {categoryData?.name ? (
          <p className="text-[1rem]">บริการ{categoryData?.name}</p>
        ) : (
          <Skeleton height={18} width={80} />
        )}
      </div>
      <div className="flex items-center">
        <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
          สีพื้นหลัง
        </p>
        {categoryData?.background_color ? (
          <div
            className={`w-12 h-8 border border-gray-200 `}
            style={{
              backgroundColor: `${categoryData?.background_color ?? "white"}`,
            }}
          ></div>
        ) : (
          <Skeleton height={28} width={48} />
        )}
      </div>
      <div className="flex items-center">
        <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
          สีตัวอักษร
        </p>
        {categoryData?.text_color ? (
          <div
            className={`w-12 h-8 border border-gray-200`}
            style={{
              backgroundColor: `${categoryData?.text_color ?? "white"}`,
            }}
          ></div>
        ) : (
          <Skeleton height={28} width={48} />
        )}
      </div>
      <hr className="my-6 border-1 border-gray-300" />
      <div className="flex items-center">
        <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
          สร้างเมื่อ
        </p>
        {categoryData?.created_at ? (
          <p className="text-[1rem]">
            {convertThaiDateTime(categoryData?.created_at)}
          </p>
        ) : (
          <Skeleton height={18} width={150} />
        )}
      </div>
      <div className="flex items-center">
        <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
          แก้ไขล่าสุด
        </p>
        {categoryData?.updated_at ? (
          <p className="text-[1rem]">
            {convertThaiDateTime(categoryData?.updated_at)}
          </p>
        ) : (
          <Skeleton height={18} width={150} />
        )}
      </div>
    </div>
  );
}

export default MainContent;
