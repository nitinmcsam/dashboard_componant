import React from "react";
import { BsHouseFill } from "react-icons/bs";

function StatsCard({mainIcon,category,CategoryValue,iconBg,footerIcon}) {
  return (
    <div className="card max-w-[330px] min-w-[300px] mx-4 my-8 w-96 h-28  sm:w-96 md:w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
    <div className="flex justify-between -mt-4 ">
      <div className="-mt-7  rounded mb-10 w-20 h-20  text-white text-4xl flex justify-center items-center" style={{backgroundColor:iconBg}}>
        <BsHouseFill />
        </div>
        <div className="flex flex-col items-end ml-8">
        <p className="text-slate-500 text-lg font-sans font-extralight">
          {category}
        </p>
        <span className="text-slate-600 text-2xl font-sans font-light ">
          {CategoryValue}
        </span>
      </div>
    </div>
    <div className=" -mt-7" >
      <hr></hr>

      <div className="  my-2 text-slate-500 flex items-center
      " >
      {footerIcon}
        <p className="  mt-1 ml-2 font-light text-xs"
        >Get More Space...</p> </div>
    </div>
  </div>
  );
}

export default StatsCard;
