import React from "react";

function PaymentDeposite() {
  return (
    <div class="deposit">
      <div class="flex">
        <p>Choose the receiving method</p>
        <a href="">Add new</a>
      </div>
      <div class="bg-white shadow-md p-5 w-full max-w-3xl">
        <div class="deposite-box">
          <div id="custom-checkbox">
            <div class="checkbox">
              <div class="checkbox__inner"></div>
            </div>
            <div class="wrapper">
              <div class="checkbox-details">
                <p className="text-xl font-medium">Bank Deposit</p>
                <p class="text-gray-400 ">
                  <span className="pr-5"> Zenith Bank </span>{" "}
                  <span> Account No: 123456789 </span>
                </p>
              </div>
              <div class="checkbox-action">
                <a class="" href="/payment/transfer">
                  {" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDeposite;
