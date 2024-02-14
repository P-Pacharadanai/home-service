import { Link } from "react-router-dom";

const ServiceLists = ({ photo, title, price, tag, btnGhost, iconTag, circle }) => {
  
  return (
    <>
    <div className="flex-1 sm:w-[300px] sm:min-w-[340px] w-full rounded-[8px] border-solid border-2 border-gray-300  pb-4 bg-white font-prompt">
      <div className=" justify-center items-center rounded-full" >
        <img src={photo} className="w-full h-[180px] " />
        <div className="mt-4 flex gap-2.5 pl-4">
          <p className="text-md text-blue-800 p-2.5 rounded-xl leading-none bg-blue-100">{tag}</p>
        </div>
        <h3 className="mt-2 text-xl leading-normal font-semibold pl-4 text-gray-950">{title}</h3>
        <div className="flex items-start gap-2.5 pl-4 mt-1">
          <img src={iconTag} width={16} height={6} className="relative " />
          <img src={circle} width={4} height={4} className="absolute -mb-3 mt-1 ml-1" />
          <p className="leading-normal text-gray-700 tracking-wide text-sm pb-6">{price}</p>
        </div>
        <Link to="" className="text-blue-600 font-semibold leading-6 underline mt-6 mb-2 pl-4">เลือกบริการ</Link>

      </div>
      
    </div>
   
    </>
  )
};

export default ServiceLists



