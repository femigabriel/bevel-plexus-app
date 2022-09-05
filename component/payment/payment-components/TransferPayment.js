import React from "react";
import TransferDetails from "../transfer/TransferDetails";
import TransferCalculator from "../transfer/TransferCalculator";
import PaymentDeposite from "../transfer/PaymentDeposite";
import PaymentButton from "../PaymentButton";

function TransferPayment({onBtnClick}) {
  return (
    <div>
      <TransferDetails />
      <TransferCalculator />
      <PaymentDeposite />
      <PaymentButton onBtnClick={onBtnClick} />
    </div>
  );
}

export default TransferPayment;
