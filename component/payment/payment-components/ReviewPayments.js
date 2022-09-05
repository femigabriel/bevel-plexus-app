import React from "react";
import PaymentSummary from "../review/PaymentSummary";
import ETransfer from "../review/ETransfer";
import PaymentButton from "../PaymentButton";

function ReviewPayments({ onBtnClick }) {
  return (
    <div>
      <PaymentSummary />
      <ETransfer />
      <PaymentButton onBtnClick={onBtnClick} />
    </div>
  );
}

export default ReviewPayments;
