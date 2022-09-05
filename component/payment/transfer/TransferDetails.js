import React from "react";
import { CalendarTwoTone, HourglassTwoTone } from "@ant-design/icons";

function TransferDetails() {
  return (
    <div className="max-w-3xl	">
      <div className="font-medium text-xl">
        <h1 className="">Transfer Details</h1>
      </div>
      <div className="section-one">
        <div className="section-title">
          <p>When you want they receive?</p>
        </div>
        <div className="flex justify-between max-w-2xl">
          <div className="flex bg-white w-full max-w-xs shadow-md p-6 rounded-md">
            <CalendarTwoTone className="text-4xl mt-3" />
            <p className="flex flex-col text-2xl font-medium ml-5 mb-5">
              1-2 Business Day
              <span className="text-sm font-normal text-lg text-gray-400">
                Free
              </span>
            </p>
          </div>
          <div className="flex bg-white w-full max-w-xs shadow-md p-5 rounded-md">
            <HourglassTwoTone className="text-4xl mt-3" />
            <p className="flex flex-col text-2xl font-medium ml-5">
              Same day
              <span className="text-sm font-normal text-lg  text-gray-400">
                1% of transaction
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferDetails;
