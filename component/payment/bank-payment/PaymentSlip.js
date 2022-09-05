import React from "react";

export default function PaymentSlip() {
  return (
    <div className="section-two max-w-3xl w-full">
      <div className="shadow-box bg-none">
        <div className="payment-summary-card">
          <p>
            <span>Send Amount</span>
            <span>1,000 USD</span>
          </p>
          <p>
            <span>Exchange rate</span>
            <span>3.79</span>
          </p>
          <p>
            <span>Fees</span>
            <span class="greentext">Free</span>
          </p>
          <p>
            <span>Recipent gets</span>
            <span>3,900 BRL</span>
          </p>
          <div class="section-divider"></div>
          <p>
            <span>Receiving method</span>
            <span>Bank Deposit</span>
          </p>
          <div className="section-divider"></div>
          <p>
            <span>Your total</span>
            <span>1,000 USD</span>
          </p>
        </div>
      </div>
    </div>
  );
}
