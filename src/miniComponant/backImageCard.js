import React from "react";
import { SiCodeproject } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { HiComputerDesktop } from "react-icons/hi2";

function BackImageCard() {
  return (
    <div className="z-10 max-sm:w-[24rem] md:w-[35rem] w-fit max-md:w-[35rem]  border border-gray-200 rounded-lg bg-gray-800 dark:border-gray-700" style={{backgroundImage:`url("image/2bg.jpg")`,backgroundSize:"cover",backgroundColor: 'rgb(75 115 157)', backgroundBlendMode:"multiply"}}>
      <div className="">  
      <div className="  flex justify-center max-sm:my-3 my-6">
        <img
          src="image/logoReact.svg"
          className=" bg-white h-20  w-20 sm:w-[70px] sm:h-[70px]  p-2 rounded-full"
          alt="img_key"
        ></img>
      </div>
      <div className="flex justify-center flex-col">
        <text className="text-white font-normal  text-[20px]  sm:text-[28px] md:text-[35px]  font-sans">
          React Bundle
        </text>
        <div className="">
          <p className="text-white font-normal  text-[15px] sm:text-[18px] max-sm:mx-[56px] md:text-[20px] ">
            Get Access to all of our React premium Products
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center max-sm:my-4 my-8">
        <div className="flex flex-col items-center mx-4 text-white">
          <div className="text-white text-[3rem] max-sm:text-[40px]">
            <SiCodeproject />
          </div>
          <div className="text-[30px] sm:text-[20px] font-normal">
            <div className=""> <p>26</p></div>
          </div>
          <div className="text-[20px] max-sm:text-[18px] font-light">
            <p>Products</p>
          </div>
        </div>

        <div className="flex flex-col items-center mx-4 text-white">
          <div className="text-white text-[3rem] max-sm:text-[41px]">
            <CiSettings />
          </div>
          <div className="text-[30px] sm:text-[20px] font-normal">
            <p>26</p>
          </div>
          <div className="text-[20px] max-sm:text-[18px] font-light">
            <p>Products</p>
          </div>
        </div>

        <div className="flex flex-col items-center mx-4 text-white">
          <div className="text-white text-[3rem] max-sm:text-[40px]">
            <HiComputerDesktop />
          </div>
          <div className="text-[30px] sm:text-[20px] font-normal">
            <p>26</p>
          </div>
          <div className="text-[20px] max-sm:text-[18px] font-light">
            <p>Products</p> 
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default BackImageCard;
