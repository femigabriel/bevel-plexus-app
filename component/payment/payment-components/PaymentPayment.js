import React from "react";
import PaymentMethods from "../bank-payment/PaymentMethods";
import PaymentSlip from "../bank-payment/PaymentSlip";
import PaymentButton from "../PaymentButton";
function PaymentPayment({ onBtnClick }) {
  return (
    <div>
      <PaymentMethods />
      <PaymentSlip />
      <PaymentButton onBtnClick={onBtnClick} />
    </div>
  );
}

export default PaymentPayment;
