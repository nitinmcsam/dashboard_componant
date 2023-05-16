import { Tooltip } from "@mui/material";
import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";

function TableCompnant({ tableHeader, userDetils }) {
  console.log(userDetils);
  return (
    <div className=" max-w-full">
      <div className=" bg-white rounded-xl    max-md:overflow-x-scroll sm:overflow-none">
        <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className=" ">
            <tr className="border-b   ">
              {tableHeader.map((headerName) => {
                return (
                  <th className="px-4 mt-3  mr-5  py-4 border-gray-600 capitalize font-normal text-lg  text-slate-500 ">
                    <p className="text-sm  "> {headerName}</p>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {userDetils.map((userData) => {
              console.log(userData);
              return (
                <tr className="hover:bg-slate-300 border-b-2 border-gray-300 dark:border-gray-700">
                  <td>
                    <div className=" items-center my-2 min-w-[15rem] flex">
                      <div className="flex">
                        <img
                          src={userData.author.userImg}
                          alt=""
                          className="object-cover w-11 h-11 mx-5 rounded-xl"
                        ></img>
                      </div>
                      <div className=" flex flex-col items-start">
                        <text className="font-sans font-medium  text-[14px] text-slate-700">
                          {userData.author.userName}
                        </text>
                        <text className="font-light  text-[13px] text-slate-600">
                          {userData.author.email}
                        </text>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className=" flex ml-3 flex-col items-start">
                      <p className=" text-[13px]   font-semibold text-slate-600">
                        {userData.Status.work}
                      </p>
                      <p className=" text-[13px] font-light text-slate-600">
                        Organization
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className=" flex justify-center text-[14px] font-medium text-slate-600">
                      <p>python</p>
                    </div>
                  </td>

                  <td>
                    <div className="flex justify-center">
                      <p>23/04/18</p>
                    </div>
                  </td>
                  <td>
                    <Tooltip title="Edit" arrow placement="top" typographyClasses={{ tooltip: '16px '}}>
                      <div className=" cursor-pointer text-[20px] px-10 ml-4 font-normal text-blue-400">
                        <MdOutlineModeEdit />
                      </div>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableCompnant;
