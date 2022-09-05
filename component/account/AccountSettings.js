import React from "react";
import {
  MailTwoTone,
  FlagTwoTone,
  SettingTwoTone,
  LockTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import AccountLevels from "./AccountLevels";

function AccountSettings() {
  return (
    <div className="info">
      <div className="info-header">
        <div class="header-title">
          <h4>Transactions</h4>
        </div>
        <div className="info-title">
          <h2 className="">Account Settings</h2>
        </div>
      </div>
      <div className="flex w-full pt-5 ">
        <div className="pr-5">
          <div className="flex border-2 drop-shadow-lg border-sky-400 w-72 bg-sky-100 rounded-md p-2 mb-4">
            <span class="icon">
              <SettingTwoTone />
            </span>
            <h2 className="mt-2">Account Settings</h2>
          </div>
          <div className="flex  w-72 bg-white rounded-md p-2 drop-shadow-lg mb-4">
            <span class="icon">
              <FlagTwoTone />
            </span>
            <h2 className="mt-2">Verification Levels</h2>
          </div>
          <div className="flex  w-72 bg-white rounded-md p-2 drop-shadow-lg	mb-4">
            <span class="icon">
              <LockTwoTone />
            </span>
            <h2 className="mt-2">Change Password</h2>
          </div>
        </div>

        {/*  */}
        <div className=" w-full	pr-5">
          <div className="info-header">
            <div className="info-title">
              <h2 className="">Account Settings</h2>
            </div>
            <div class="header-title">
              <h4>PERSONAL INFORMATION</h4>
            </div>
          </div>
          <div className="flex  bg-white rounded-md p-2 drop-shadow-lg	mb-4">
            <span class="icon">
              <UserOutlined className="text-sky-400" />
            </span>
            <input type="text" disabled="" value="Jordyn" />
          </div>
          <div className="flex  bg-white rounded-md p-2 drop-shadow-lg	mb-4">
            <span class="icon">
              <MailTwoTone />
            </span>
            <input class="" type="text" disabled="" value="+87 456 899 2345" />
            <button class="btn">Change</button>
          </div>
        </div>

        {/*  */}
        <div className=" w-full	pr-5 pt-20">
          <div className="flex  bg-white rounded-md p-2 drop-shadow-lg	mb-4">
            <span class="icon">
              <UserOutlined className="text-sky-400" />
            </span>
            <input type="text" disabled="" value="Workman" />
          </div>
          <div className="flex  bg-white rounded-md p-2 drop-shadow-lg	mb-4">
            <span class="icon">
              <MailTwoTone />
            </span>
            <input class="" type="text" disabled="" value="+87 456 899 2345" />
            <button class="btn">Change</button>
          </div>
        </div>
      </div>
      <AccountLevels />
      {/* <AccountPassword /> */}
    </div>
  );
}

export default AccountSettings;
