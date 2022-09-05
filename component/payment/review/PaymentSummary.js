import React from "react";
const brazilFlag = "/images/brazilFlag.svg";
const canadaFlag = "/images/canadaFlag.svg";

function PaymentSummary() {
  return (
    <div className="summary-slip pt-10">
      <div className="summary-box">
        <div className="summary-title">
          <h3>Transfer summary</h3>
          <a href="">Edit</a>
        </div>
        <div className="summary-card">
          <p>
            <span>Send Amount</span>

            <span>
              <img src={canadaFlag} className="flag" alt="cad" />
              1,000 USD
            </span>
          </p>
          <p>
            <span>Exchange rate</span>
            <span>3.79</span>
          </p>
          <p>
            <span>Fees</span>
            <span className="greentext">Free</span>
          </p>
          <p>
            <span>Recipent gets</span>
            <span>
              <img src={brazilFlag} className="flag" alt="brl" />
              3,900 BRL
            </span>
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

export default PaymentSummary;
