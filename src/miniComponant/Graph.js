import React from "react";
import LineChart from "./PicChart";
import { AiOutlineLineChart } from "react-icons/ai";

function graph() {
  return (
    <div className="max-sm:w-[23rem] max-sm:h-auto  max-sm:mx-5  max-sm:my-5 w-[50rem] max-md:w-[35rem]  border border-gray-200 rounded-lg bg-white dark:border-gray-700">
      <div className="mb-6">
        <div className="flex">
          <div className=" w-full max-md:flex-col max-md:items-start flex justify-between items-center flex-row -mb-1 ml-3">
            <div className="flex flex-row items-end -mt-2 mb-4">
              <div className="text-[30px] w-[3.5rem] h-[3.5rem] flex items-center justify-center ml-4  rounded-lg text-white bg-blue-400">
                <AiOutlineLineChart />
              </div>

              <div className="mt-1 mx-3 flex flex-col items-start" >
                <h6 className=" text-gray-600 font-medium text-[14px] ">
                  Line Chart
                </h6>
                <p className="font-thin text-gray-600 text-[12px]">
                  Product insights
                </p>
              </div>
            </div>

            <div className="flex mr-7">
              <div className="mx-2 flex flex-row  items-center ">
                <span
                  className="  mx-2 bg-red-700 w-[0.425rem] h-[0.425rem] inline-block rounded-full font-mono"
                  style={{ backgroundColor: "#FF6384" }}
                ></span>
                <h6 className=" font-semilight text-[12px] ">Set One</h6>
              </div>
              <div className="mx-2 flex flex-row  items-center">
                <span
                  className="mx-2 bg-red-700 w-[0.425rem] h-[0.425rem] inline-block rounded-full font-mono"
                  style={{ backgroundColor: "blue" }}
                ></span>
                <h6 className=" font-semilight text-[12px] ">Set Two</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center  ">
          <LineChart  />
        </div>
      </div>
    </div>
  );
}

export default graph;
