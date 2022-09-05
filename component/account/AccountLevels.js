import React from "react";
import { ExclamationCircleTwoTone } from "@ant-design/icons";
function AccountLevels() {
  return (
    // <div class="flex items-center justify-items-center">
    //   <div className="w-full flex ">
    //     <div className="shadow-box  mr-5 max-w-sm border-sky-400 rounded-md border">
    //       <div className="box-heading flex">
    //         <h3 className="">LEVEL 1</h3>
    //         <ExclamationCircleTwoTone className="" />
    //       </div>
    //       <div className="subtitle">
    //         <p>$1000 Dollar Limit</p>
    //       </div>
    //       <div className="wrap">
    //         <p>Personal info</p>
    //         <p>Phone Verification</p>
    //         <p className="fade-text">School information</p>
    //         <p>Verification</p>
    //       </div>
    //     </div>

    //     <div className="shadow-box max-w-sm	">
    //       <div className="box-heading flex">
    //         <h3>LEVEL 2</h3>
    //         <ExclamationCircleTwoTone />
    //       </div>
    //       <div className="subtitle">
    //         <p>$2000 Dollar Limit</p>
    //       </div>
    //       <div className="wrap">
    //         <p>To upgrade to this level, upload your XXXX Document Below</p>
    //       </div>
    //     </div>
    //     <div className="btn">
    //       <button>Choose File</button>
    //     </div>
    //   </div>
    // </div>
    <div className="level p-20 text-center">
      <div className="page-header">
        <div className="level-title">
          <h2>Verification Levels</h2>
          <span className="badge success">50% VERIFIED</span>
        </div>
      </div>
      <div className="box-wrapper">
        <div className="box-container">
          <div className="shadow-box shadow-box-highlight">
            <div className="box-heading">
              <h3>LEVEL 1</h3>
              <ExclamationCircleTwoTone />
            </div>
            <div class="subtitle">
              <p>$1000 Dollar Limit</p>
            </div>
            <div className="wrap">
              <p>Personal info</p>
              <p>Phone Verification</p>
              <p className="fade-text">School information</p>
              <p>Verification</p>
            </div>
          </div>
        </div>
        <div className="box-container">
          <div className="shadow-box">
            <div className="box-heading">
              <h3>LEVEL 2</h3>
              <ExclamationCircleTwoTone />
            </div>
            <div class="subtitle">
              <p>$2000 Dollar Limit</p>
            </div>
            <div class="wrap">
              <p>To upgrade to this level, upload your XXXX Document Below</p>
            </div>
          </div>
          <div className="btn-level w-full">
            <button>Choose File</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountLevels;
