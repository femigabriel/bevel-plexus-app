// import '../styles.css'
import Header from "../component/home/leftbar/Header";
import PaymentHeader from "../component/payment/recipent/PaymentHeader";
import "antd/dist/antd.css";
import PaymentSidebar from "../component/payment/PaymentSidebar";
import SelectRecipent from "../component/payment/payment-components/SelectRecipent";
import TransferPayment from "../component/payment/payment-components/TransferPayment";
import PaymentPayment from "../component/payment/payment-components/PaymentPayment";
import ReviewPayments from "../component/payment/payment-components/ReviewPayments";
import { useState } from "react";

function payment() {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex justify-between bg-gray-100 fixed  w-full">
      <div className="flex  w-full max-w-3xl	 ">
        <Header />
        <PaymentSidebar pageIndex={index} />
      </div>
      <div className="pt-2 pr-5  flex flex-col w-screen h-screen overflow-y-auto">
        <PaymentHeader />
        {index == 0 && (
          <SelectRecipent
            onBtnClick={() => setIndex((current) => current + 1)}
          />
        )}
        {index == 1 && (
          <TransferPayment
            onBtnClick={() => setIndex((current) => current + 1)}
          />
        )}
        {index == 2 && (
          <PaymentPayment
            className="w-full max-w-7xl"
            onBtnClick={() => setIndex((current) => current + 1)}
          />
        )}
        {index == 3 && (
          <ReviewPayments
            onBtnClick={() => setIndex((current) => current + 1)}
          />
        )}
      </div>
    </div>
  );
}

export default payment;
