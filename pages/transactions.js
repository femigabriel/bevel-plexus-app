import React from "react";
import Header from "../component/home/leftbar/Header";
import PaymentHeader from "../component/payment/recipent/PaymentHeader";
import HistoryHeader from "../component/TransactionHistory/HistoryHeader";
import Transactions from "../component/TransactionHistory/Transactions";

function transactions() {
  return (
    <div className="flex justify-between bg-gray-100 fixed  w-full">
      <div className="w-full max-w-xs ">
        <Header />
      </div>
      <div className="pt-2 pl-10 pr-10 flex flex-col w-full h-screen overflow-y-auto">
        <PaymentHeader />
        <HistoryHeader />
        <Transactions />
      </div>
    </div>
  );
}

export default transactions;
