import React from "react";
import PaymentType from "../recipent/PaymentType";
import PaymentProfile from "../recipent/PaymentProfile";
import PaymentButton from "../PaymentButton";

function SelectRecipent({onBtnClick}) {
  return (
    <div>
      <PaymentType />
      <PaymentProfile />
      <PaymentButton onBtnClick={onBtnClick} />
    </div>
  );
}

export default SelectRecipent;
