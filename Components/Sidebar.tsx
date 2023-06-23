"use client";

import React from "react";
import { Cog6ToothIcon, UserCircleIcon } from "@heroicons/react/24/outline";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className=" h-full flex">

        <div className=" z-50 fixed lg:hidden bottom-5 px-8 py-3 w-3/4 rounded-full left-1/2 -translate-x-1/2 bg-black">
        <div className=" flex justify-between   space-x-6 ">
          <div className=" flex justify-center xl:justify-normal  space-x-2 items-center">
            <img src="https://svgshare.com/i/uaM.svg" title="ksi" />
            <p className=" hidden xl:flex font-monty text-lg font-bold">Dashboard</p>
          </div>
          <div className=" flex justify-center xl:justify-normal  space-x-2 items-center">
            <img
              src="https://svgshare.com/i/uam.svg"
              title="transaction icon"
            />
            <p className=" hidden xl:flex font-monty text-lg">Transactions</p>
          </div>
          <div className=" flex justify-center xl:justify-normal  space-x-2 items-center">
            <img src="https://svgshare.com/i/uaV.svg" title="schedule" />
            <p className=" hidden xl:flex font-monty text-lg">Schedules</p>
          </div>
          <div className=" flex justify-center xl:justify-normal  space-x-2 items-center">
            <UserCircleIcon className="h-6 w-6" />
            <p className=" hidden xl:flex font-monty text-lg">Users</p>
          </div>
          <div className=" flex justify-center xl:justify-normal  space-x-2 items-center">
            <Cog6ToothIcon  className="h-6 w-6" />
            <p className=" hidden xl:flex font-monty text-lg  items-center space-x-2">
              Settings
            </p>
          </div>
        </div>

        </div>






        <div className=" hidden  bg-black py-[60px] flex-grow  my-10 ml-10 px-[50px] rounded-[30px] lg:flex flex-col justify-between">
      <div className=" space-y-[60px]">
        <h2 className=" font-monty font-bold text-2xl xl:text-4xl">Board.</h2>
        <div className=" flex justify-center flex-col space-y-10">
          <div className=" flex justify-center xl:justify-normal  space-x-2 items-center">
            <img src="https://svgshare.com/i/uaM.svg" title="ksi" />
            <p className=" hidden xl:flex font-monty text-lg font-bold">Dashboard</p>
          </div>
          <div className=" flex justify-center xl:justify-normal  space-x-2 items-center">
            <img
              src="https://svgshare.com/i/uam.svg"
              title="transaction icon"
            />
            <p className=" hidden xl:flex font-monty text-lg">Transactions</p>
          </div>
          <div className=" flex justify-center xl:justify-normal  space-x-2 items-center">
            <img src="https://svgshare.com/i/uaV.svg" title="schedule" />
            <p className=" hidden xl:flex font-monty text-lg">Schedules</p>
          </div>
          <div className=" flex justify-center xl:justify-normal  space-x-2 items-center">
            <UserCircleIcon className="h-6 w-6" />
            <p className=" hidden xl:flex font-monty text-lg">Users</p>
          </div>
          <div className=" flex justify-center xl:justify-normal  space-x-2 items-center">
            <Cog6ToothIcon  className="h-6 w-6" />
            <p className=" hidden xl:flex font-monty text-lg  items-center space-x-2">
              Settings
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col space-y-5 font-monty">
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
    </div>
  );
}

export default Sidebar;
