import React from "react";
import AccountSettings from "../component/account/AccountSettings";
import Header from "../component/home/leftbar/Header";
import PaymentHeader from "../component/payment/recipent/PaymentHeader";

function account() {
  return (
    <div className="flex justify-between bg-gray-100 fixed  w-full">
      <div className="w-full max-w-xs ">
        <Header />
      </div>
      <div className="pt-2 pl-10 pr-10 flex flex-col w-full h-screen overflow-y-auto">
        <PaymentHeader />
        <AccountSettings />
      </div>
    </div>
  );
}

export default account;
