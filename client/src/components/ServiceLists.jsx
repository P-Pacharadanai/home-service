const ServiceLists = ({ photo, title, price, tag, btnGhost, iconTag, circle }) => {
  return (
    <>
    <div className="xl:bg-pink-400 drop-shadow-md border-2 flex flex-col font-prompt items-start justify-center max-sm:w-full flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[10px]">
      <img src={photo} className="w-full h-[180px]" />
      <div className="mt-4 flex gap-2.5">
        <p className="text-md text-blue-800 p-2.5 rounded-xl leading-none bg-blue-100">{tag}</p>
      </div>
      <h3 className="mt-2 text-xl leading-normal font-semibold">{title}</h3>
      <div className="flex items-start gap-2.5">
        <img src={iconTag} width={16} height={6} className="relative  " />
        <img src={circle} width={4} height={4} className="absolute mb-1 mr-1 mt-1 ml-1" />
        <p className="leading-normal">{price}</p>
      </div>
      <a href="/" className="text-blue-600 underline mt-6 mb-2">{btnGhost}</a>
    </div>
   
    </>
  )
};

export default ServiceLists;