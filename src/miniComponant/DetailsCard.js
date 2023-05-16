import React from "react";
import { MdLocationOn, MdEdit } from "react-icons/md";
import { IoIosRefresh } from "react-icons/io";
import { Tooltip } from "@mui/material";

function DetailsCard() {
  return (
    <div>
      <div className=" cursor-pointer relative group hover:mt-14 w-2xl  max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-14 m-3">
        <div className="  flex justify-center -nt-10 px-3 ">
          <a href="#">
            <img
              className=" rounded transition duration-300 -mt-5  ease-out transform group-hover:-translate-y-10  w-[40rem]"
              src="pic1.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="-mt-7 mx-auto  flex items-center justify-center">
          <Tooltip title="Refresh" arrow>
            <div className="mx-6 text-2xl text-gray-900">
              <IoIosRefresh />
            </div>
          </Tooltip>

          <Tooltip title="Edit" arrow>
            <div className=" mx-6 text-2xl text-red-500">
              <MdEdit />
            </div>
          </Tooltip>
        </div>
        <div class="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-sans font-normal tracking-tight text-gray-900 hover:text-pink-400 dark:text-white">
              Cozy 5 Stars Apartment
            </h5>
          </a>
          <p className="mb-3 text-[16px] font-light text-slate-500 mx-1 hover:text-slate-800 dark:text-gray-400">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to "Naviglio" where you can enjoy the main night life
            in Barcelona.
          </p>
        </div>
        <hr class="w-7/12 h-px mx-auto mt-1  bg-gray-200 border-0 rounded md:mt-1 dark:bg-gray-700"></hr>
        <div className="flex text-[14px] justify-between font-normal text-slate-600 my-4 mx-4 ">
          <div>
            <p>$899/night</p>
          </div>
          <div className="flex items-baseline">
            <MdLocationOn />
            <p> place Barcelona, Spain</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
