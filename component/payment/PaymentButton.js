import React from "react";

function PaymentButton({onBtnClick}) {
  return (
    <div className="flex justify-between pt-20 pb-20">
      <button onClick={onBtnClick} className="text-gray-400 ">
        Cancel
      </button>
      <button
        onClick={onBtnClick}
        className="pt-3 pb-3 pr-20 pl-20 text-white bg-blue-600 rounded-md"
      >
        Next
      </button>
    </div>
  );
}

export default PaymentButton;
